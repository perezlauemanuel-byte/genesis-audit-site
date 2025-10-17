import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Download, FileArchive, FileText, FileCheck, Shield } from 'lucide-react'

function Downloads({ language }) {
  const t = {
    es: {
      title: 'Descargas',
      subtitle: 'Paquetes y firmas de auditoría',
      packages: 'Paquetes Disponibles',
      verification: 'Guía de Verificación',
      verificationTitle: 'Cómo verificar el hash SHA-256',
      step1: 'Descarga el archivo ZIP y su correspondiente archivo SHA-256.txt',
      step2: 'En tu terminal, navega al directorio donde descargaste los archivos',
      step3: 'Ejecuta el comando:',
      step4: 'Compara el hash generado con el contenido del archivo .txt',
      step5: 'Si coinciden, el archivo es auténtico y no ha sido modificado',
      downloads: [
        {
          name: 'GENESIS_Core_Complete_2025-10_v4.zip',
          description: 'Contenedor completo v4 (incluye v2_fix + hash + carta)',
          icon: FileArchive,
          file: '/downloads/GENESIS_Core_Complete_2025-10_v4.zip'
        },
        {
          name: 'GENESIS_Core_Complete_2025-10_v2_fix.zip',
          description: 'Paquete maestro v2 (corregido, con contenido real)',
          icon: FileArchive,
          file: '/downloads/GENESIS_Core_Complete_2025-10_v2_fix.zip'
        },
        {
          name: 'GENESIS_Core_Complete_2025-10_v2_fix_SHA256.txt',
          description: 'Hash SHA-256 del paquete v2_fix',
          icon: FileText,
          file: '/downloads/GENESIS_Core_Complete_2025-10_v2_fix_SHA256.txt'
        },
        {
          name: 'GENESIS_Core_FullPackage_2025-10_v1.zip',
          description: 'Paquete completo de archivos auditados',
          icon: FileArchive,
          file: '/downloads/GENESIS_Core_FullPackage_2025-10_v1.zip'
        },
        {
          name: 'GENESIS_Core_CartaAutenticidad_2025-10_v3.pdf',
          description: 'Carta de autenticidad firmada',
          icon: FileCheck,
          file: '/downloads/GENESIS_Core_CartaAutenticidad_2025-10_v3.pdf'
        }
      ]
    },
    en: {
      title: 'Downloads',
      subtitle: 'Audit packages and signatures',
      packages: 'Available Packages',
      verification: 'Verification Guide',
      verificationTitle: 'How to verify SHA-256 hash',
      step1: 'Download the ZIP file and its corresponding SHA-256.txt file',
      step2: 'In your terminal, navigate to the directory where you downloaded the files',
      step3: 'Run the command:',
      step4: 'Compare the generated hash with the content of the .txt file',
      step5: 'If they match, the file is authentic and has not been modified',
      downloads: [
        {
          name: 'GENESIS_Core_Complete_2025-10_v4.zip',
          description: 'Complete container v4 (includes v2_fix + hash + certificate)',
          icon: FileArchive,
          file: '/downloads/GENESIS_Core_Complete_2025-10_v4.zip'
        },
        {
          name: 'GENESIS_Core_Complete_2025-10_v2_fix.zip',
          description: 'Master package v2 (fixed, with real content)',
          icon: FileArchive,
          file: '/downloads/GENESIS_Core_Complete_2025-10_v2_fix.zip'
        },
        {
          name: 'GENESIS_Core_Complete_2025-10_v2_fix_SHA256.txt',
          description: 'SHA-256 hash of v2_fix package',
          icon: FileText,
          file: '/downloads/GENESIS_Core_Complete_2025-10_v2_fix_SHA256.txt'
        },
        {
          name: 'GENESIS_Core_FullPackage_2025-10_v1.zip',
          description: 'Complete package of audited files',
          icon: FileArchive,
          file: '/downloads/GENESIS_Core_FullPackage_2025-10_v1.zip'
        },
        {
          name: 'GENESIS_Core_CartaAutenticidad_2025-10_v3.pdf',
          description: 'Signed authenticity certificate',
          icon: FileCheck,
          file: '/downloads/GENESIS_Core_CartaAutenticidad_2025-10_v3.pdf'
        }
      ]
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{t[language].title}</h1>
        <p className="text-muted-foreground">{t[language].subtitle}</p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            {t[language].packages}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {t[language].downloads.map((item, idx) => {
              const Icon = item.icon
              return (
                <div key={idx} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                  <div className="flex items-center gap-4">
                    <Icon className="h-8 w-8 text-primary" />
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <Button asChild>
                    <a href={item.file} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Shield className="h-5 w-5" />
            {t[language].verification}
          </CardTitle>
          <CardDescription>{t[language].verificationTitle}</CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">1</span>
              <p className="pt-0.5">{t[language].step1}</p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">2</span>
              <p className="pt-0.5">{t[language].step2}</p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">3</span>
              <div className="pt-0.5">
                <p className="mb-2">{t[language].step3}</p>
                <code className="block bg-muted p-3 rounded text-sm font-mono">
                  sha256sum GENESIS_Core_Complete_2025-10_v2_fix.zip
                </code>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">4</span>
              <p className="pt-0.5">{t[language].step4}</p>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">5</span>
              <p className="pt-0.5">{t[language].step5}</p>
            </li>
          </ol>
        </CardContent>
      </Card>
    </div>
  )
}

export default Downloads

