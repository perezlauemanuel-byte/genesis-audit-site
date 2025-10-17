import { useState, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { FileCheck, Download, Printer } from 'lucide-react'

function Dashboard({ language }) {
  const [summary, setSummary] = useState(null)

  useEffect(() => {
    fetch('/data/GENESIS_Audit_summary.json')
      .then(res => res.json())
      .then(data => setSummary(data))
      .catch(err => console.error('Error loading summary:', err))
  }, [])

  const t = {
    es: {
      title: 'Dashboard de Auditoría',
      subtitle: 'Resumen ejecutivo de GENESIS Core',
      package: 'Paquete Auditado',
      hash: 'Hash Verificado',
      status: 'Estado',
      generated: 'Generado',
      totalFiles: 'Total de Archivos',
      distribution: 'Distribución por Categoría',
      sourcePackage: 'Paquete Fuente',
      notes: 'Notas',
      print: 'Imprimir Resumen',
      goToDownloads: 'Ir a Descargas',
      loading: 'Cargando...',
      categories: {
        source_code: 'Código Fuente',
        docs: 'Documentos',
        data_config: 'Datos/Config'
      }
    },
    en: {
      title: 'Audit Dashboard',
      subtitle: 'GENESIS Core Executive Summary',
      package: 'Audited Package',
      hash: 'Verified Hash',
      status: 'Status',
      generated: 'Generated',
      totalFiles: 'Total Files',
      distribution: 'Distribution by Category',
      sourcePackage: 'Source Package',
      notes: 'Notes',
      print: 'Print Summary',
      goToDownloads: 'Go to Downloads',
      loading: 'Loading...',
      categories: {
        source_code: 'Source Code',
        docs: 'Documents',
        data_config: 'Data/Config'
      }
    }
  }

  const getStatusColor = (status) => {
    switch (status?.toUpperCase()) {
      case 'GREEN': return 'bg-green-500'
      case 'YELLOW': return 'bg-yellow-500'
      case 'RED': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const handlePrint = () => {
    window.print()
  }

  if (!summary) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-muted-foreground">{t[language].loading}</p>
      </div>
    )
  }

  const chartData = Object.entries(summary.totals.by_category).map(([key, value]) => ({
    name: t[language].categories[key] || key,
    count: value
  }))

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{t[language].title}</h1>
        <p className="text-muted-foreground">{t[language].subtitle}</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t[language].status}</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <Badge className={getStatusColor(summary.status)}>
              {summary.status}
            </Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t[language].totalFiles}</CardTitle>
            <FileCheck className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{summary.totals.files}</div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{t[language].package}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-mono break-all">{summary.package}</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>{t[language].distribution}</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="hsl(var(--primary))" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>{t[language].hash}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t[language].package}</p>
                <p className="text-xs font-mono break-all bg-muted p-2 rounded">
                  {summary.verified_hash}
                </p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">{t[language].sourcePackage}</p>
                <p className="text-xs font-bold mb-1">{summary.source_fullpackage.file}</p>
                <p className="text-xs font-mono break-all bg-muted p-2 rounded">
                  {summary.source_fullpackage.sha256}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {summary.notes && summary.notes.length > 0 && (
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>{t[language].notes}</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-1">
              {summary.notes.map((note, idx) => (
                <li key={idx} className="text-sm">{note}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      <div className="flex gap-4 print:hidden">
        <Button onClick={handlePrint}>
          <Printer className="mr-2 h-4 w-4" />
          {t[language].print}
        </Button>
        <Button variant="outline" asChild>
          <a href="/downloads">
            <Download className="mr-2 h-4 w-4" />
            {t[language].goToDownloads}
          </a>
        </Button>
      </div>

      <div className="mt-8 text-xs text-muted-foreground">
        {t[language].generated}: {summary.generated_at}
      </div>
    </div>
  )
}

export default Dashboard

