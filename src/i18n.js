import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: 'About',
        experience: 'Experience',
        education: 'Education',
        projects: 'Projects',
        contact: 'Contact'
      },
      hero: {
        title: 'Full Stack Developer',
        subtitle: 'Building scalable banking systems and web applications',
        cta: 'View Work',
        contact: 'Get in Touch'
      },
      about: {
        title: 'About Me',
        description: 'Graduate of Gunadarma University with experience as IT Support and Full Stack Developer in the banking industry. Experienced in developing banking APIs, monitoring applications, and administrative systems — from backend to frontend. Proficient in PHP Laravel, Golang, Java, and React JS. Also manages a personal project delboyy.id, an online game top-up platform.'
      },
      experience: {
        title: 'Experience',
        jobs: [
          {
            company: 'Bank Victoria',
            position: 'Full Stack Developer',
            period: 'Jul 2023 - Present',
            location: 'Jakarta, Indonesia',
            responsibilities: [
              'Developed banking system APIs: CCW BCA, CCW JALIN, QR MPM Rintis, E-money Mandiri, CCW Indomaret',
              'Managed and developed victoria run admin system',
              'Built internal monitoring log application',
              'Created ATM withdrawal application for customers',
              'Developed CIF & account opening application'
            ]
          },
          {
            company: 'Pondok Indah Hospital Bintaro',
            position: 'IT Support',
            period: 'Jul 2022 - Jul 2023',
            location: 'Tangerang Selatan',
            responsibilities: [
              'Handled user complaints and IT service needs',
              'Developed IT documents for Knowledge Management',
              'Followed up incidents and requests until permanent resolution'
            ]
          },
          {
            company: 'PT. Talenta Sumber Daya Manusia',
            position: 'Application Developer',
            period: 'Apr 2022 - May 2022',
            location: 'Jakarta, Indonesia',
            responsibilities: [
              'ReactJS + Ant Design for Web UI',
              'Golang + GORM for REST API',
              'Completed Email Blast project'
            ]
          }
        ]
      },
      skills: {
        title: 'Skills',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          devops: 'DevOps & Tools',
          database: 'Database'
        }
      },
      projects: {
        title: 'Projects',
        items: [
          {
            name: 'delboyy.id',
            description: 'Personal game top-up platform with 17+ games and 734+ products. Built with Laravel and integrated with Digiflazz API.',
            tech: ['Laravel', 'PHP', 'MySQL', 'Digiflazz API'],
            link: 'https://delboyy.id'
          },
          {
            name: 'System Monitor Dashboard',
            description: 'Real-time monitoring dashboard for server metrics with WebSocket support.',
            tech: ['FastAPI', 'Python', 'WebSocket', 'Docker'],
            link: 'https://monitor.delboyy.store'
          },
          {
            name: 'Banking API Integration',
            description: 'Developed Cardless Withdrawal (CCW) integrations for BCA and JALIN, plus E-money Mandiri and QR MPM Rintis payment systems.',
            tech: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL']
          },
          {
            name: 'CIF & CASA Opening',
            description: 'Customer Information File and Current Account/Savings Account opening application deployed at branchbvic.victoriabank.co.id.',
            tech: ['PHP', 'Laravel', 'MySQL', 'REST API'],
            link: 'https://branchbvic.victoriabank.co.id/digiform'
          },
          {
            name: 'ATM Withdrawal Application',
            description: 'Internal banking application for customer ATM cardless cash withdrawal, integrated with core banking system.',
            tech: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL']
          },
          {
            name: 'Monitoring Log Application',
            description: 'Internal log monitoring and alerting application for tracking banking system events and anomalies.',
            tech: ['PHP', 'Laravel', 'MySQL', 'WebSocket']
          }
        ]
      },
      contact: {
        title: 'Contact',
        subtitle: 'Get in Touch',
        description: "Let's work together on your next project",
        form: {
          name: 'Name',
          email: 'Email',
          message: 'Tell me about your project',
          send: 'Send Message'
        }
      },
      education: {
        title: 'Education',
        items: [
          {
            degree: 'S1 Information Technology',
            school: 'Gunadarma University',
            period: '2017 - 2021',
            gpa: 'GPA 3.74'
          },
          {
            degree: 'Fullstack Development Bootcamp',
            school: 'dibimbing.id',
            period: '2022',
            details: 'HTML, CSS, Bootstrap, MySQL, JavaScript, React JS, REST API'
          }
        ]
      }
    }
  },
  id: {
    translation: {
      nav: {
        about: 'Tentang',
        experience: 'Pengalaman',
        education: 'Pendidikan',
        projects: 'Proyek',
        contact: 'Kontak'
      },
      hero: {
        title: 'Full Stack Developer',
        subtitle: 'Membangun sistem perbankan dan aplikasi web yang scalable',
        cta: 'Lihat Karya',
        contact: 'Hubungi Saya'
      },
      about: {
        title: 'Tentang Saya',
        description: 'Lulusan Universitas Gunadarma dengan pengalaman IT Support dan Full Stack Developer di perbankan. Terbiasa mengembangkan API perbankan, aplikasi monitoring, dan sistem administrasi — dari backend hingga frontend. Berpengalaman menggunakan PHP Laravel, Golang, Java, dan React JS dalam pengembangan sistem. Juga mengelola proyek pribadi delboyy.id, platform topup game online.'
      },
      experience: {
        title: 'Pengalaman Kerja',
        jobs: [
          {
            company: 'Bank Victoria',
            position: 'Full Stack Developer',
            period: 'Jul 2023 - Sekarang',
            location: 'Jakarta, Indonesia',
            responsibilities: [
              'Mengembangkan API sistem perbankan: CCW BCA, CCW JALIN, QR MPM Rintis, E-money Mandiri, CCW Indomaret',
              'Mengelola dan mengembangkan admin victoria run',
              'Membangun aplikasi monitoring log untuk sistem internal',
              'Membuat aplikasi pengambilan ATM Nasabah',
              'Membuat aplikasi pembukaan CIF & rekening nasabah'
            ]
          },
          {
            company: 'Pondok Indah Hospital Bintaro',
            position: 'IT Support',
            period: 'Jul 2022 - Jul 2023',
            location: 'Tangerang Selatan',
            responsibilities: [
              'Menangani komplain dan kebutuhan pengguna untuk layanan IT',
              'Mengembangkan dokumen IT untuk Knowledge Management',
              'Follow-up insiden dan request hingga solusi permanen'
            ]
          },
          {
            company: 'PT. Talenta Sumber Daya Manusia',
            position: 'Application Developer',
            period: 'Apr 2022 - Mei 2022',
            location: 'Jakarta, Indonesia',
            responsibilities: [
              'ReactJS + Ant Design untuk Web UI',
              'Golang + GORM untuk REST API',
              'Menyelesaikan proyek Email Blast'
            ]
          }
        ]
      },
      skills: {
        title: 'Keahlian',
        categories: {
          frontend: 'Frontend',
          backend: 'Backend',
          devops: 'DevOps & Tools',
          database: 'Database'
        }
      },
      projects: {
        title: 'Proyek & Portofolio',
        items: [
          {
            name: 'delboyy.id',
            description: 'Platform topup game milik sendiri dengan 17+ game dan 734+ produk. Dibangun dengan Laravel dan terintegrasi dengan API Digiflazz.',
            tech: ['Laravel', 'PHP', 'MySQL', 'Digiflazz API'],
            link: 'https://delboyy.id'
          },
          {
            name: 'System Monitor Dashboard',
            description: 'Dashboard monitoring real-time untuk metrik server dengan dukungan WebSocket.',
            tech: ['FastAPI', 'Python', 'WebSocket', 'Docker'],
            link: 'https://monitor.delboyy.store'
          },
          {
            name: 'Integrasi API Perbankan',
            description: 'Mengembangkan integrasi Cardless Withdrawal (CCW) untuk BCA dan JALIN, serta sistem pembayaran E-money Mandiri dan QR MPM Rintis.',
            tech: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL']
          },
          {
            name: 'Pembukaan CIF & CASA',
            description: 'Aplikasi pembukaan Customer Information File dan rekening Tabungan/Giro yang di-deploy di branchbvic.victoriabank.co.id.',
            tech: ['PHP', 'Laravel', 'MySQL', 'REST API'],
            link: 'https://branchbvic.victoriabank.co.id/digiform'
          },
          {
            name: 'Aplikasi Pengambilan ATM',
            description: 'Aplikasi internal perbankan untuk penarikan tunai tanpa kartu ATM nasabah, terintegrasi dengan core banking system.',
            tech: ['Java', 'Spring Boot', 'REST API', 'PostgreSQL']
          },
          {
            name: 'Aplikasi Monitoring Log',
            description: 'Aplikasi monitoring dan alerting log internal untuk melacak event dan anomali sistem perbankan.',
            tech: ['PHP', 'Laravel', 'MySQL', 'WebSocket']
          }
        ]
      },
      contact: {
        title: 'Kontak',
        subtitle: 'Hubungi Saya',
        description: 'Mari bekerja sama untuk proyek Anda berikutnya',
        form: {
          name: 'Nama',
          email: 'Email',
          message: 'Ceritakan tentang proyek Anda',
          send: 'Kirim Pesan'
        }
      },
      education: {
        title: 'Pendidikan',
        items: [
          {
            degree: 'S1 Information Technology',
            school: 'Gunadarma University',
            period: '2017 - 2021',
            gpa: 'IPK 3.74'
          },
          {
            degree: 'Fullstack Development Bootcamp',
            school: 'dibimbing.id',
            period: '2022',
            details: 'HTML, CSS, Bootstrap, MySQL, JavaScript, React JS, REST API'
          }
        ]
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
