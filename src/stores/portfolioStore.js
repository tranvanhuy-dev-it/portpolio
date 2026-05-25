import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    // ===================== PERSONAL INFO =====================
    personal: {
      name: 'Trần Văn Huy',
      title: 'Full-Stack Developer',
      taglines: [
        'Full-Stack Developer',
        'UI/UX Lover',
        'Problem Solver',
      ],
      bio: `Xin chào! Tôi là một Full-Stack Developer đam mê xây dựng những sản phẩm web
      hiện đại và hiệu suất cao. Tôi có kinh nghiệm làm việc với các công nghệ từ frontend
      đến backend, luôn hướng đến code sạch và trải nghiệm người dùng tốt nhất.`,
      bio2: `Tôi đặc biệt hứng thú với lĩnh vực Chuyển đổi số, luôn mong muốn ứng dụng
      các giải pháp công nghệ hiện đại để tối ưu hóa quy trình, nâng cao hiệu suất và
      mang lại những giá trị thực tế nhất cho cộng đồng và các doanh nghiệp.`,
      location: 'Đà Nẵng, Việt Nam',
      email: 'tranvanhuy064206@gmail.com',
      availability: 'Sẵn sàng cho cơ hội mới',
      avatar: null, // thay bằng đường dẫn ảnh thật
      cv: '/cv.pdf',
      socials: {
        github: 'https://github.com/tranvanhuy-dev-it',
        linkedin: 'https://www.linkedin.com/in/huy-tran-van-5753b13b4',
        //twitter: 'https://twitter.com/yourusername',
        facebook: 'https://facebook.com/tranvanhuy260306',
      }
    },

    // ===================== STATS =====================
    // stats: [
    //   { value: '3+', label: 'Năm kinh nghiệm' },
    //   { value: '20+', label: 'Dự án hoàn thành' },
    //   { value: '15+', label: 'Công nghệ sử dụng' },
    //   { value: '100%', label: 'Cam kết chất lượng' },
    // ],

    // ===================== SKILLS =====================
    skillCategories: [
      {
        id: 'frontend',
        label: 'Frontend',
        icon: '🎨',
        skills: [
          { name: 'Vue.js', level: 95, icon: '🟢' },
          { name: 'React', level: 60, icon: '⚛️' },
          { name: 'TypeScript', level: 65, icon: '🔷' },
          { name: 'JavaScript', level: 95, icon: '🟨' },
          { name: 'Tailwind CSS', level: 90, icon: '💨' },
          { name: 'HTML/CSS', level: 95, icon: '🌐' },
          { name: 'Nuxt.js', level: 55, icon: '💚' },
          { name: 'GSAP', level: 70, icon: '✨' },
        ]
      },
      {
        id: 'backend',
        label: 'Backend',
        icon: '⚙️',
        skills: [
          { name: '.NET (NET Framework)', level: 80, icon: '🎯' },
          { name: 'Java (Spring Boot)', level: 80, icon: '☕' },
          { name: 'Python', level: 70, icon: '🐍' },
          { name: 'REST API', level: 90, icon: '🔗' },
          { name: 'GraphQL', level: 65, icon: '⬢' },
          { name: 'Socket.io', level: 75, icon: '🔌' },
        ]
      },
      {
        id: 'database',
        label: 'Database',
        icon: '🗄️',
        skills: [
          { name: 'PostgreSQL', level: 80, icon: '🐘' },
          { name: 'MongoDB', level: 85, icon: '🍃' },
          { name: 'MySQL', level: 75, icon: '🐬' },
          { name: 'SQL Server', level: 95, icon: '🛢️' },
        ]
      },
      {
        id: 'devops',
        label: 'DevOps & Tools',
        icon: '🛠️',
        skills: [
          { name: 'Git/GitHub', level: 90, icon: '🐙' },
          { name: 'Linux', level: 72, icon: '🐧' },
          { name: 'Nginx', level: 65, icon: '🌐' },
          { name: 'CI/CD', level: 55, icon: '🔄' },
        ]
      },
    ],

    // ===================== PROJECTS =====================
    projects: [
      {
        id: 1,
        title: 'SonTra Health Management',
        description: 'Hệ thống quản lý y tế và sức khỏe tích hợp bản đồ số tại khu vực Sơn Trà.',
        longDesc: 'Ứng dụng hỗ trợ theo dõi sức khỏe cộng đồng, quản lý cơ sở y tế và các dịch vụ sơ cứu y tế khẩn cấp. Tích hợp bản đồ số thông minh giúp định vị, tìm kiếm và điều hướng nhanh chóng đến các cơ sở y tế gần nhất.',
        tags: ['JavaScript', 'Frappe', 'React.js', 'Python', 'PostgreSQL'],
        category: 'fullstack',
        // github: 'https://github.com/tranvanhuy-dev-it/SonTraHealthManagement',
        demo: '#',
        image: '/sonTraHealth.png',
        featured: true,
      },
      {
        id: 2,
        title: 'StudyHub',
        description: 'Nền tảng chia sẻ tài liệu học tập đa phương tiện và tài nguyên học thuật dành cho sinh viên.',
        longDesc: 'Hệ sinh thái cho phép sinh viên tải lên, chia sẻ tài liệu học tập, giáo trình, tài nguyên môn học. Hệ thống hỗ trợ phân quyền người dùng, kiểm duyệt bài đăng thông minh và chức năng tìm kiếm nâng cao.',
        tags: ['Vue 3', 'Spring Boot', 'MySQL', 'JWT', 'Vite'],
        category: 'fullstack',
        github: 'https://github.com/tranvanhuy-dev-it/StudyHub-Client',
        demo: '#',
        image: '/studyHub.png',
        featured: true,
      },
      {
        id: 3,
        title: 'PBL3 - Electronic E-Commerce',
        description: 'Trang web thương mại điện tử chuyên kinh doanh thiết bị và linh kiện điện tử trực tuyến.',
        longDesc: 'Dự án PBL3 xây dựng một hệ thống bán linh kiện điện tử hoàn chỉnh, tích hợp giỏ hàng, đặt hàng, quản lý đơn hàng, theo dõi lịch sử mua hàng và trang dashboard phân tích doanh thu, hàng tồn kho dành cho Admin.',
        tags: ['Vue.js', 'ASP.NET Core', 'SQL Server', 'Entity Framework'],
        category: 'fullstack',
        github: 'https://github.com/tranvanhuy-dev-it/pbl3-web-api.git',
        demo: '#',
        image: '/pbl3.png',
        featured: true,
      },
      {
        id: 4,
        title: 'HVAC Job Management System',
        description: 'Hệ thống quản lý công việc và điều phối kỹ thuật viên lắp đặt/bảo trì điều hòa không khí.',
        longDesc: 'Giải pháp quản lý tổng thể cho doanh nghiệp điện lạnh gồm phần Backend quản lý trên Web và Mobile App di động cho kỹ thuật viên nhận ca, cập nhật trạng thái thi công trực tiếp tại công trình.',
        tags: ['.NET Core', 'C#', 'SQL Server', 'Mobile App'],
        category: 'fullstack',
        github: 'https://github.com/tranvanhuy-dev-it/hvac-job-management-system-dotnet-api',
        demo: '#',
        image: '/hvac.png',
        featured: false,
      }
    ],

    experiences: [
      {
        id: 1,
        company: 'Trường Đại học Bách khoa - ĐHĐN',
        position: 'Trưởng nhóm / Thành viên phát triển dự án PBL',
        period: '2024 – Hiện tại',
        duration: 'Dự án học thuật & PBL',
        description: [
          'Chịu trách nhiệm thiết kế hệ thống, lựa chọn kiến trúc và trực tiếp phát triển các dự án môn học, đặc biệt là các kỳ PBL (Project-Based Learning).',
          'Tích hợp công nghệ hiện đại như React.js, Vue 3, Python (Frappe Framework), Spring Boot và .NET Core vào các bài toán thực tế.',
          'Quản lý mã nguồn dự án qua Git/GitHub, thực hiện phân chia công việc và làm việc nhóm hiệu quả theo mô hình Agile/Scrum.',
          'Phân tích cơ sở dữ liệu (PostgreSQL, MySQL, SQL Server), tối ưu hóa các câu lệnh truy vấn và thiết kế API đáp ứng hiệu năng.'
        ],
        tech: ['React.js', 'Vue 3', 'Python', 'Spring Boot', '.NET Core', 'PostgreSQL'],
        type: 'academic',
      },
      // {
      //   id: 2,
      //   company: 'Câu lạc bộ Tin học / Lập trình trường',
      //   position: 'Thành viên Ban Kỹ thuật',
      //   period: '2024 – Nay',
      //   duration: 'Hoạt động ngoại khóa',
      //   description: [
      //     'Tham gia chia sẻ kinh nghiệm học tập, hướng dẫn và giải đáp thắc mắc về lập trình căn bản (C/C++, OOP) cho các bạn sinh viên khóa dưới.',
      //     'Hỗ trợ công tác tổ chức các sự kiện học thuật, kỳ thi lập trình cấp trường và các buổi workshop chia sẻ công nghệ.',
      //     'Cùng các thành viên nghiên cứu công nghệ mới, xây dựng các sản phẩm phần mềm nhỏ phục vụ các hoạt động của câu lạc bộ.'
      //   ],
      //   tech: ['C/C++', 'OOP', 'Data Structures', 'Git', 'Algorithms'],
      //   type: 'club',
      // },
      {
        id: 3,
        company: 'Dự án cá nhân & Đóng góp Open-Source',
        position: 'Nhà phát triển Độc lập',
        period: '2024 – Nay',
        duration: 'Tự học & Phát triển bản thân',
        description: [
          'Chủ động nghiên cứu và tiếp cận các xu hướng công nghệ mới thông qua tài liệu tiếng Anh chính thống và các nền tảng tự học uy tín.',
          'Xây dựng các dự án thực tế đầy tâm huyết như ứng dụng y tế SonTra Health Management, nền tảng tài liệu StudyHub để áp dụng lý thuyết vào thực hành.',
          'Rèn luyện tư duy phân tích, giải quyết vấn đề (problem-solving) và không ngừng tối ưu hóa trải nghiệm người dùng UI/UX.'
        ],
        tech: ['Frappe', 'Vue 3', 'Spring Boot', 'PostgreSQL', 'Tailwind CSS'],
        type: 'self-study',
      },
    ],

    // ===================== EDUCATION =====================
    education: [
      {
        id: 1,
        school: 'Trường Đại học Bách khoa, Đại học Đà Nẵng',
        degree: 'Cử nhân Công nghệ Thông tin',
        period: '2024 – Nay',
        gpa: '3.5/4.0',
        description: 'Chuyên ngành Khoa học dữ liệu và Trí tuệ nhân tạo',
        type: 'degree',
      },
      // {
      //   id: 2,
      //   school: 'Udemy / FreeCodeCamp',
      //   degree: 'Full-Stack Web Development Bootcamp',
      //   period: '2021',
      //   gpa: null,
      //   description: 'Chứng chỉ phát triển web full-stack với JavaScript, React, Node.js và MongoDB.',
      //   type: 'certificate',
      // },
      // {
      //   id: 3,
      //   school: 'AWS',
      //   degree: 'AWS Certified Cloud Practitioner',
      //   period: '2023',
      //   gpa: null,
      //   description: 'Chứng chỉ nền tảng về cloud computing và dịch vụ AWS.',
      //   type: 'certificate',
      // },
    ],

    // ===================== UI STATE =====================
    activeSection: 'hero',
    projectFilter: 'all',
    activeSkillCategory: 'frontend',
  }),

  getters: {
    filteredProjects: (state) => {
      if (state.projectFilter === 'all') return state.projects
      return state.projects.filter(p => p.category === state.projectFilter)
    },
    activeSkills: (state) => {
      const cat = state.skillCategories.find(c => c.id === state.activeSkillCategory)
      return cat ? cat.skills : []
    },
  },

  actions: {
    setProjectFilter(filter) {
      this.projectFilter = filter
    },
    setActiveSkillCategory(id) {
      this.activeSkillCategory = id
    },
    setActiveSection(section) {
      this.activeSection = section
    },
  }
})
