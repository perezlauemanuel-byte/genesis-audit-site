import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Search } from 'lucide-react'

function Inventory({ language }) {
  const [inventory, setInventory] = useState([])
  const [filteredInventory, setFilteredInventory] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  useEffect(() => {
    fetch('/data/GENESIS_Audit_inventory.csv')
      .then(res => res.text())
      .then(text => {
        const lines = text.trim().split('\n')
        const headers = lines[0].split(',')
        const data = lines.slice(1).map(line => {
          const values = line.split(',')
          return {
            path: values[0],
            category: values[1],
            bytes: parseInt(values[2]),
            sha256: values[3]
          }
        })
        setInventory(data)
        setFilteredInventory(data)
      })
      .catch(err => console.error('Error loading inventory:', err))
  }, [])

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredInventory(inventory)
    } else {
      const filtered = inventory.filter(item =>
        item.path.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setFilteredInventory(filtered)
    }
  }, [searchTerm, inventory])

  const t = {
    es: {
      title: 'Inventario de Archivos',
      subtitle: 'Tabla completa de archivos auditados',
      search: 'Buscar por ruta...',
      matches: 'coincidencias',
      path: 'Ruta',
      category: 'Categoría',
      bytes: 'Bytes',
      sha256: 'SHA-256',
      loading: 'Cargando...',
      categories: {
        source_code: 'Código',
        docs: 'Docs',
        data_config: 'Datos'
      }
    },
    en: {
      title: 'File Inventory',
      subtitle: 'Complete table of audited files',
      search: 'Search by path...',
      matches: 'matches',
      path: 'Path',
      category: 'Category',
      bytes: 'Bytes',
      sha256: 'SHA-256',
      loading: 'Loading...',
      categories: {
        source_code: 'Code',
        docs: 'Docs',
        data_config: 'Data'
      }
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'source_code': return 'bg-blue-500'
      case 'docs': return 'bg-green-500'
      case 'data_config': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{t[language].title}</h1>
        <p className="text-muted-foreground">{t[language].subtitle}</p>
      </div>

      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            {t[language].search}
          </CardTitle>
          <CardDescription>
            {filteredInventory.length} {t[language].matches}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Input
            type="text"
            placeholder={t[language].search}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-medium">{t[language].path}</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">{t[language].category}</th>
                  <th className="px-4 py-3 text-right text-sm font-medium">{t[language].bytes}</th>
                  <th className="px-4 py-3 text-left text-sm font-medium">{t[language].sha256}</th>
                </tr>
              </thead>
              <tbody>
                {filteredInventory.map((item, idx) => (
                  <tr key={idx} className="border-t border-border hover:bg-muted/50 transition-colors">
                    <td className="px-4 py-3 text-sm font-mono text-xs break-all max-w-md">
                      {item.path}
                    </td>
                    <td className="px-4 py-3">
                      <Badge className={getCategoryColor(item.category)}>
                        {t[language].categories[item.category] || item.category}
                      </Badge>
                    </td>
                    <td className="px-4 py-3 text-right text-sm font-mono">
                      {item.bytes.toLocaleString()}
                    </td>
                    <td className="px-4 py-3 text-xs font-mono break-all max-w-xs">
                      {item.sha256}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Inventory

