import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Info, User, Shield, FileText } from 'lucide-react'

function About({ language }) {
  const t = {
    es: {
      title: 'Acerca de GENESIS Core',
      subtitle: 'Información sobre el proyecto y autoría',
      project: 'Sobre el Proyecto',
      projectDesc: 'GENESIS Core es un proyecto de auditoría y gestión de activos digitales desarrollado por Emanuel Pérez Lau. Este sitio web presenta los resultados de la auditoría del paquete GENESIS Core, incluyendo inventario completo, verificación de integridad mediante hashes SHA-256, y documentación de autenticidad.',
      author: 'Autoría y Propiedad',
      authorName: 'Emanuel Pérez Lau',
      authorDesc: 'Autor y propietario al 100% del proyecto GENESIS Core. Todos los derechos reservados.',
      brand: 'Marca',
      brandDesc: 'GENESIS es una marca registrada de Emanuel Pérez Lau.',
      conception: 'Concepción',
      conceptionDesc: 'Concebido por Emanuel con asistencia de IA.',
      legal: 'Información Legal',
      legalDesc: 'Uso autorizado únicamente para fines de demostración, venta o licenciamiento. Toda reproducción total o parcial requiere autorización escrita del autor.',
      copyright: '© 2025 Emanuel Pérez Lau — Marca: GENESIS — Concebido por Emanuel con asistencia de IA',
      audit: 'Sobre esta Auditoría',
      auditDesc: 'Esta auditoría fue realizada el 17 de octubre de 2025 sobre el paquete GENESIS_Core_Complete_2025-10_v2_fix.zip. Los resultados incluyen verificación de integridad, inventario completo de archivos, y análisis de cumplimiento de estándares de documentación.'
    },
    en: {
      title: 'About GENESIS Core',
      subtitle: 'Project and authorship information',
      project: 'About the Project',
      projectDesc: 'GENESIS Core is a digital asset auditing and management project developed by Emanuel Pérez Lau. This website presents the audit results of the GENESIS Core package, including complete inventory, integrity verification through SHA-256 hashes, and authenticity documentation.',
      author: 'Authorship and Ownership',
      authorName: 'Emanuel Pérez Lau',
      authorDesc: '100% author and owner of the GENESIS Core project. All rights reserved.',
      brand: 'Brand',
      brandDesc: 'GENESIS is a registered trademark of Emanuel Pérez Lau.',
      conception: 'Conception',
      conceptionDesc: 'Conceived by Emanuel with AI assistance.',
      legal: 'Legal Information',
      legalDesc: 'Authorized use only for demonstration, sale, or licensing purposes. Any total or partial reproduction requires written authorization from the author.',
      copyright: '© 2025 Emanuel Pérez Lau — Brand: GENESIS — Conceived by Emanuel with AI assistance',
      audit: 'About this Audit',
      auditDesc: 'This audit was performed on October 17, 2025 on the GENESIS_Core_Complete_2025-10_v2_fix.zip package. Results include integrity verification, complete file inventory, and documentation standards compliance analysis.'
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{t[language].title}</h1>
        <p className="text-muted-foreground">{t[language].subtitle}</p>
      </div>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="h-5 w-5" />
              {t[language].project}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t[language].projectDesc}</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              {t[language].author}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="font-semibold text-lg">{t[language].authorName}</p>
              <p className="text-muted-foreground">{t[language].authorDesc}</p>
            </div>
            <div>
              <p className="font-semibold">{t[language].brand}</p>
              <p className="text-muted-foreground">{t[language].brandDesc}</p>
            </div>
            <div>
              <p className="font-semibold">{t[language].conception}</p>
              <p className="text-muted-foreground">{t[language].conceptionDesc}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              {t[language].legal}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">{t[language].legalDesc}</p>
            <div className="bg-muted p-4 rounded-lg">
              <p className="text-sm font-mono">{t[language].copyright}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5" />
              {t[language].audit}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{t[language].auditDesc}</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default About

