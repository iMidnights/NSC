import {
    PhoneIcon,
    ScaleIcon,
    ClipboardDocumentCheckIcon,
    ClipboardDocumentListIcon,
    InformationCircleIcon,
    SparklesIcon,
    CheckBadgeIcon
} from '@heroicons/react/24/outline'

export const details = {
    phoneNumber: "507-200-8022",
    email: "nsconsultingsolutionsllc@gmail.com"
}

export const services = [
    {
      title: '245D Compliance Support',
      description: 'We offer expert guidance to help your organization navigate the complexities of 245D compliance. Our team ensures you meet all regulatory standards, keeping your business in good standing and enabling you to focus on delivering quality care. ',
      href: '/services#24D-Compliance-Support',
      icon: ScaleIcon,
      iconForeground: 'text-teal-700',
      iconBackground: 'bg-teal-50',
    },
    {
      title: 'Correction Order Support',
      description: 'If your organization receives correction orders, we’re here to help. Our consultants work with you to identify areas of non-compliance, create an action plan, and implement changes to ensure you’re meeting regulations and avoiding future issues.',
      href: '/services#Correction-Order-Support',
      icon: CheckBadgeIcon,
      iconForeground: 'text-purple-700',
      iconBackground: 'bg-purple-50',
    },
    {
      title: 'Notice of Reinspections',
      description: 'Prepare for reinspections with confidence. We assist in organizing documentation and reviewing processes to ensure you’re fully compliant, minimizing any risks during the reinspection process and keeping your organization on track. ',
      href: '/services#Notice-of-Reinspections',
      icon: InformationCircleIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
    },
    {
      title: 'Organizational Systems',
      description: 'We help streamline your processes by creating efficient systems that improve daily operations and simplify compliance management. ',
      href: '/services#Organizational-Systems',
      icon: ClipboardDocumentListIcon
      ,
      iconForeground: 'text-yellow-700',
      iconBackground: 'bg-yellow-50',
    },
    {
      title: 'Program Audits & Quality Assurance',
      description: 'We conduct thorough audits to ensure your programs meet high standards and compliance requirements, offering actionable feedback to enhance quality and performance. ',
      href: '/services#Program-Audits-&-Quality-Assurance',
      icon: ClipboardDocumentCheckIcon,
      iconForeground: 'text-rose-700',
      iconBackground: 'bg-rose-50',
    },
    {
      title: 'Application Support',
      description: 'Navigating the application process can be overwhelming. Our team provides step-by-step assistance, ensuring your applications are completed accurately and submitted correctly, making the process as smooth as possible.',
      href: '/services#Application-Support',
      icon: PhoneIcon,
      iconForeground: 'text-indigo-700',
      iconBackground: 'bg-indigo-50',
    },
    {
      title: 'Routine Oversight',
      description: 'Ongoing oversight is essential for maintaining compliance. We offer regular reviews and support, ensuring that your documentation, processes, and services consistently meet the necessary regulatory standards.',
      href: '/services#Routine-Oversight',
      icon: SparklesIcon,
      iconForeground: 'text-sky-700',
      iconBackground: 'bg-sky-50',
    }
  ]