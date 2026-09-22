/**
 * Portfolio Data Store - Achanta Mukesh Mourya
 * All information strictly verified against resume, published paper (AIJFR),
 * Scaler cryptographic certificate, and GitHub repositories.
 */

const PORTFOLIO_DATA = {
  personal: {
    name: "Achanta Mukesh Mourya",
    monogram: "AMM",
    headline: "ECE Graduate | Aspiring Data Scientist & AI/ML Engineer",
    badge: "Available for Data Science & AI/ML Roles",
    location: "Rajahmundry, Andhra Pradesh, India",
    email: "achantamukeshmourya@gmail.com",
    phone: "+91 9492369318",
    resumePdf: "assets/Achanta_Mukesh_Mourya_Resume.pdf",
    profilePhoto: "assets/profile_square.jpg",
    bioSummary: "AI/ML enthusiast and Electronics & Communication Engineering graduate with hands-on experience in Python, SQL, and machine learning. Passionate about data analysis, problem-solving, and delivering accurate, high-quality results with strong attention to detail.",
    extendedBio: [
      "I am an Electronics & Communication Engineering graduate who transitioned into Data Science and Machine Learning driven by a passion for predictive modeling and data-driven intelligence.",
      "My primary expertise spans Python, SQL, Machine Learning, Deep Learning (CNNs and Transformers), and statistical data processing. I have designed and implemented end-to-end predictive maintenance architectures and published peer-reviewed research in an international journal.",
      "Currently upskilling through Scaler's intensive Data Science & Machine Learning program, sharpening my knowledge in advanced SQL, statistical inferencing, and production AI workflows."
    ],
    social: {
      github: "https://github.com/mouryaachanta",
      linkedin: "https://www.linkedin.com/in/achantamukeshmourya/",
      research: "https://www.aijfr.com/research-paper.php?id=4712",
      scalerCert: "https://certificate.scaler.com/validate/2f2bdd6fea3ee2efbe5f346d1c06be928709f3c3ce125923a79b201dcf0bff4e",
      emailLink: "mailto:achantamukeshmourya@gmail.com"
    }
  },

  stats: [
    { label: "Published Research Paper", value: "1", detail: "AIJFR International Journal (2026)" },
    { label: "Model Predictive R²", value: "0.93", detail: "NASA C-MAPSS Turbofan RUL" },
    { label: "RUL Prediction RMSE", value: "11.24", detail: "Cycles on FD001 Benchmark" },
    { label: "B.Tech ECE CGPA", value: "7.3", detail: "Sasi Institute of Tech & Eng" }
  ],

  skillCategories: [
    {
      category: "Programming & Databases",
      icon: "code",
      skills: [
        { name: "Python", level: "Core Language", highlight: true },
        { name: "SQL", level: "Advanced Queries & Relational DBs", highlight: true },
        { name: "Jupyter Notebooks", level: "Interactive Analysis", highlight: false }
      ]
    },
    {
      category: "Data Science & Analytics",
      icon: "bar-chart-3",
      skills: [
        { name: "Data Analysis", level: "EDA & Pattern Discovery", highlight: true },
        { name: "Data Visualization", level: "Interactive Charts & Visual Dashboards", highlight: true },
        { name: "Tableau", level: "Visual Analytics & Dashboards", highlight: true },
        { name: "Data Preprocessing", level: "Cleaning, Normalization & Imputation", highlight: true },
        { name: "Time-Series Processing", level: "Sliding Windows & Trend Clipping", highlight: true },
        { name: "Microsoft Excel", level: "Spreadsheets & Advanced Analytics", highlight: true },  
        { name: "Statistics", level: "Inferential & Descriptive", highlight: false }
      ]
    },
    {
      category: "Machine Learning & Deep Learning",
      icon: "cpu",
      skills: [
        { name: "Machine Learning", level: "Supervised & Regression Models", highlight: true },
        { name: "Deep Learning", level: "Neural Network Architectures", highlight: true },
        { name: "Convolutional Neural Networks (CNN)", level: "1D Conv Temporal Feature Extraction", highlight: true },
        { name: "Transformer Networks", level: "Multi-Head Self-Attention Encoders", highlight: true },
        { name: "Uncertainty Estimation", level: "Probabilistic Output Dual-Heads", highlight: true },
        { name: "Model Evaluation", level: "RMSE, MAE, R² Scoring", highlight: false }
      ]
    },
    {
      category: "Frameworks, Cloud & Tools",
      icon: "layers",
      skills: [
        { name: "TensorFlow", level: "Deep Learning Modeling", highlight: true },
        { name: "Flask", level: "Web Dashboard & Inference API", highlight: true },
        { name: "Git & GitHub", level: "Version Control & Collaboration", highlight: true },
        { name: "IBM Cloud", level: "watsonx & Cloud AI Workspaces", highlight: false }
      ]
    },
    {
      category: "Soft Skills & Languages",
      icon: "user-check",
      skills: [
        { name: "Analytical Thinking", level: "Core Strengths", highlight: false },
        { name: "Problem Solving", level: "Core Strengths", highlight: false },
        { name: "Research Skills", level: "Academic & Technical", highlight: false },
        { name: "Adaptability & Teamwork", level: "Collaboration", highlight: false },
        { name: "English (Professional)", level: "Spoken & Written", highlight: false },
        { name: "Telugu (Native)", level: "Spoken & Written", highlight: false }
      ]
    }
  ],

  projects: [
    {
      id: "predictive-maintenance",
      isFeatured: true,
      title: "Predictive Maintenance for Industrial Machinery using Deep Learning",
      subtitle: "Hybrid CNN-Transformer Framework for Turbofan Remaining Useful Life (RUL) Prediction with Real-Time Flask Dashboard",
      category: "Deep Learning / Industrial AI",
      tags: ["Python", "TensorFlow", "CNN (Conv1D)", "Transformer Encoder", "NASA C-MAPSS FD001", "Flask", "Uncertainty Estimation"],
      githubUrl: "https://github.com/mouryaachanta/Predictive-Maintenance-using-Hybrid-CNN-Transformer",
      paperUrl: "https://www.aijfr.com/research-paper.php?id=4712",
      paperPdfUrl: "https://aijfr.com/papers/2026/2/4712.pdf",
      overview: "Developed a novel hybrid deep learning model (Deep-RUL) combining Convolutional Neural Networks and Transformer Encoders to predict Remaining Useful Life (RUL) of turbofan engines using the benchmark NASA C-MAPSS FD001 dataset.",
      architectureHighlights: [
        "1D Convolutional Layer (Conv1D) to capture local spatial-temporal features from 21 sensor channels.",
        "3 Stacked Transformer Encoder blocks with 8 multi-head self-attentions and 128-unit Position-wise Feed-Forward networks (Swish activation) to capture long-range degradation dependencies.",
        "Probabilistic Output Head utilizing dual dense layers predicting both the point estimate Mean (μ) RUL and the Log-Variance (σ²) for calibrated Uncertainty Estimation.",
        "Look-back window of 60 cycles with piecewise linear RUL clipping (max = 125 cycles).",
        "Integrated into a full-stack Flask real-time web dashboard classifying engine health into 3 actionable tiers: HEALTHY (RUL > 50), INSPECT (25 < RUL ≤ 50), and CRITICAL (RUL ≤ 25)."
      ],
      metrics: [
        { label: "RMSE", value: "11.24", desc: "Root Mean Square Error" },
        { label: "MAE", value: "7.59", desc: "Mean Absolute Error" },
        { label: "R² Score", value: "0.93", desc: "Coefficient of Determination" }
      ],
      healthTiers: [
        { name: "HEALTHY", rule: "RUL > 50 cycles", color: "emerald", desc: "Optimal operational parameters" },
        { name: "INSPECT", rule: "25 < RUL ≤ 50 cycles", color: "amber", desc: "Maintenance inspection required" },
        { name: "CRITICAL", rule: "RUL ≤ 25 cycles", color: "rose", desc: "Immediate component overhaul" }
      ]
    },
    {
      id: "ibm-cloud-ai",
      isFeatured: false,
      title: "IBM Cloud AI Project — Water Source Analysis & RAG Lab",
      subtitle: "Data Analytics and Exploration of Clean Drinking Water Metrics Integrated with IBM Cloud AI Services",
      category: "Data Science & Cloud AI",
      tags: ["Python", "Jupyter Notebook", "IBM Cloud", "watsonx", "RAG Lab", "Data Analysis"],
      githubUrl: "https://github.com/mouryaachanta/IBM-CLOUD-PROJECT",
      overview: "Conducted data exploration, statistical analysis, and machine learning preprocessing on the 'Improved Source of Drinking Water' dataset. Integrated with IBM Cloud AI training modules including Retrieval-Augmented Generation (RAG) and cloud deployment workflows.",
      architectureHighlights: [
        "Jupyter Notebook pipeline conducting statistical exploratory data analysis (EDA) and data cleansing.",
        "Completed IBM Cloud Artificial Intelligence training modules and RAG Lab verification.",
        "Synthesized insights into technical presentation and reproducible data notebooks."
      ],
      metrics: [
        { label: "Dataset", value: "UN/Global Water", desc: "Improved Drinking Water metrics" },
        { label: "Platform", value: "IBM Cloud", desc: "watsonx AI environment" },
        { label: "Focus", value: "EDA & RAG", desc: "Retrieval Augmented AI exploration" }
      ]
    }
  ],

  publication: {
    title: "Predictive Maintenance for Industrial Machinery",
    journal: "Advanced International Journal for Research (AIJFR)",
    volumeIssue: "Volume 7, Issue 2, March-April 2026",
    publishedDate: "April 10, 2026",
    eIssn: "3048-7641",
    impactFactor: "9.11",
    authors: [
      "Achanta Mukesh Mourya (Primary Author)",
      "G Kanaka Rao",
      "VBM Krishna",
      "KandulaRohith",
      "S Janakiramayya"
    ],
    paperUrl: "https://www.aijfr.com/research-paper.php?id=4712",
    pdfUrl: "https://aijfr.com/papers/2026/2/4712.pdf",
    abstract: "Predictive maintenance is essential for ensuring the reliable and safe operation of complex industrial systems like turbofan engines. Accurate Remaining Useful Life (RUL) estimation allows for timely maintenance interventions, minimizing operational downtime and preventing catastrophic failures. Traditional deep learning models like LSTMs often struggle to capture long-range dependencies in complex time-series data. To address these challenges, this paper proposes a novel hybrid deep learning framework (Deep-RUL) integrating Convolutional Neural Networks (CNN) with Transformer Encoder layers. Evaluated on the NASA C-MAPSS FD001 dataset, the proposed ensemble model achieves an RMSE of 11.24, an MAE of 7.59, and an R² score of 0.93, coupled with a Probabilistic Output Head for calibrated uncertainty estimation and a real-time Flask web dashboard.",
    keywords: [
      "Remaining Useful Life (RUL)",
      "Transformer Networks",
      "Convolutional Neural Networks (CNN)",
      "Uncertainty Estimation",
      "NASA C-MAPSS",
      "Deep Learning",
      "Industrial Informatics"
    ]
  },

  certifications: [
    {
      id: "scaler-dsml-sql",
      title: "Modern Data Science and ML with specialisation in AI",
      module: "Advanced SQL & AI for Data Professionals",
      issuer: "Scaler",
      issueDate: "August 26, 2026",
      certId: "DSML-2026-11347 (2F2BDD6F)",
      verificationUrl: "https://certificate.scaler.com/validate/2f2bdd6fea3ee2efbe5f346d1c06be928709f3c3ce125923a79b201dcf0bff4e",
      verified: true,
      skills: ["Advanced SQL", "Relational Database Design", "Complex Joins & Aggregations", "AI for Data Workflows"],
      badge: "Cryptographically Verified"
    },
    {
      id: "microsoft-coursera-ai",
      title: "Advanced AI and Machine Learning Techniques and Capstone",
      module: "End-to-End ML Pipelines & AI Deployment",
      issuer: "Microsoft (Coursera)",
      issueDate: "Verified Credential",
      certId: "Microsoft-Coursera Capstone",
      verificationUrl: "https://github.com/mouryaachanta",
      verified: true,
      skills: ["Machine Learning", "AI Concepts", "Deployment Pipelines", "Real-World AI Applications"],
      badge: "Professional Capstone"
    },
    {
      id: "ibm-cloud-ai-badges",
      title: "IBM Cloud AI & RAG Training",
      module: "Getting Started with AI, Journey to Cloud, RAG Lab",
      issuer: "IBM Cloud / IBM Skills",
      issueDate: "Verified Credential",
      certId: "IBM AI Credentials",
      verificationUrl: "https://github.com/mouryaachanta/IBM-CLOUD-PROJECT",
      verified: true,
      skills: ["IBM Cloud", "watsonx", "Retrieval-Augmented Generation (RAG)", "Cloud AI Environments"],
      badge: "Cloud AI Certified"
    }
  ],

  courses: [
    {
      program: "Data Science & Machine Learning",
      institution: "Scaler",
      duration: "06/2026 – Present",
      location: "Bengaluru, India",
      summary: "Currently pursuing comprehensive upskilling in Data Science & Machine Learning, strengthening expertise in Python, SQL, statistics, data analysis, deep learning, and hands-on production-oriented projects."
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Electronics and Communication Engineering",
      institution: "Sasi Institute of Technology & Engineering",
      duration: "10/2023 – 04/2026",
      location: "Tadepalligudem, Andhra Pradesh, India",
      score: "CGPA: 7.3 / 10",
      highlights: [
        "Focus on signal processing, digital systems, microprocessors, and algorithmic problem-solving.",
        "Conducted major capstone research in deep learning and predictive maintenance using NASA benchmark datasets.",
        "Authored and published research paper in international journal AIJFR."
      ]
    },
    {
      degree: "Diploma in Electronics and Communication Engineering",
      institution: "AANM & VVRSR Polytechnic",
      duration: "12/2020 – 04/2023",
      location: "Gudlavalleru, Andhra Pradesh, India",
      score: "CGPA: 7.9 / 10",
      highlights: [
        "Solid foundation in electronic circuits, hardware architecture, mathematics, and instrumentation.",
        "Graduated with distinction (7.9 CGPA)."
      ]
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Bharatiya Vidya Bhavan's",
      duration: "06/2019 – 03/2020",
      location: "Pedatadepalli, Andhra Pradesh, India",
      score: "CGPA: 7.1 / 10",
      highlights: [
        "Strong foundation in science, mathematics, and analytical reasoning."
      ]
    }
  ]
};
