// CURRICULUM PRESET DATA STORE
const CURRICULUM_PRESETS = {
    // CSE Curriculum Presets
    cse: {
        1: [
            { code: "GEA1104", title: "Universal Human Values", credits: 3 },
            { code: "GEA1101", title: "Engineering Mathematics I", credits: 4 },
            { code: "GEA1102 / GEA1103", title: "Engineering Physics / Engineering Chemistry", credits: 3 },
            { code: "CGA1101 / CGB1101", title: "Basics of Engineering / Web Application Development", credits: 3 },
            { code: "GEA1106", title: "Technical English", credits: 3 },
            { code: "GEA1107", title: "C Programming", credits: 4 },
            { code: "GEA1111 / GEA1112", title: "Engineering Physics Laboratory / Engineering Chemistry Laboratory", credits: 1 },
            { code: "CGA1111 / CGB1111", title: "Basics of Engineering Laboratory / Web Application Development Laboratory", credits: 1 },
            { code: "GEA1108", title: "Heritage of Tamils", credits: 1 },
            { code: "GEA1109", title: "Indian Constitution", credits: 0 }
        ],
        2: [
            { code: "FLC11XX", title: "Language Elective", credits: 3 },
            { code: "GEA1102 / GEA1103", title: "Engineering Physics / Engineering Chemistry", credits: 3 },
            { code: "CGA1101 / CGB1101", title: "Basics of Engineering / Web Application Development", credits: 3 },
            { code: "GEA1121", title: "Engineering Mathematics II", credits: 4 },
            { code: "CGB1121", title: "Python Programming", credits: 4 },
            { code: "CGB1122", title: "Data Structures", credits: 4 },
            { code: "GEA1111 / GEA1112", title: "Engineering Physics Laboratory / Engineering Chemistry Laboratory", credits: 1 },
            { code: "CGA1111 / CGB1111", title: "Basics of Engineering Laboratory / Web Application Development Laboratory", credits: 1 },
            { code: "GEA1122", title: "Tamils and Technology", credits: 1 },
            { code: "GEA1123", title: "Career Skill Development I", credits: 1 }
        ],
        3: [
            { code: "CSB1201", title: "Computer Architecture and Organization", credits: 3 },
            { code: "CSB1202", title: "Digital Principles and System Design", credits: 3 },
            { code: "CGB1202", title: "Design and Analysis of Algorithms", credits: 3 },
            { code: "CGB1204", title: "Data Science", credits: 3 },
            { code: "GEA1201", title: "Engineering Mathematics III", credits: 4 },
            { code: "CGB1201", title: "Java Programming", credits: 4 },
            { code: "CGB1211", title: "Design and Analysis of Algorithms Laboratory", credits: 1 },
            { code: "CGB1212", title: "Data Science Laboratory", credits: 1 },
            { code: "GEA1211", title: "Business Communication", credits: 2 },
            { code: "GEA1202", title: "Career Skill Development II", credits: 1 }
        ],
        4: [
            { code: "CGA1221", title: "Probability and Statistics", credits: 4 },
            { code: "CGB1203", title: "Agile Development Methodology", credits: 3 },
            { code: "CGB1222", title: "Artificial Intelligence and Machine Learning", credits: 3 },
            { code: "CGB1223", title: "Operating Systems", credits: 3 },
            { code: "CSC129X", title: "Emerging Elective - I", credits: 3 },
            { code: "CGB1221", title: "Database Management Systems", credits: 4 },
            { code: "CSB1231", title: "Agile Development Methodology Laboratory", credits: 2 },
            { code: "CGB1231", title: "Artificial Intelligence and Machine Learning Laboratory", credits: 1 },
            { code: "CGB1232", title: "Operating Systems Laboratory", credits: 1 },
            { code: "GEA1221", title: "Career Skill Development III", credits: 1 }
        ],
        5: [
            { code: "CSB1301", title: "Theory of Computation", credits: 3 },
            { code: "CSB1302", title: "Computer Networks", credits: 3 },
            { code: "CSB1303", title: "Object-Oriented Analysis and Design", credits: 3 },
            { code: "CSC134X", title: "Professional Elective I", credits: 3 },
            { code: "CSC136X", title: "Emerging Elective II", credits: 3 },
            { code: "C135X", title: "Open Elective I", credits: 3 },
            { code: "CSB1311", title: "Computer Networks Laboratory", credits: 1 },
            { code: "GEA1301", title: "Career Skill Development IV", credits: 1 }
        ],
        6: [
            { code: "CSB1321", title: "Web Technology", credits: 3 },
            { code: "CSB1322", title: "Compiler Design", credits: 3 },
            { code: "CSB1323", title: "Cryptography and Network Security", credits: 4 },
            { code: "CSC137X", title: "Professional Elective II", credits: 3 },
            { code: "CSC139X", title: "Emerging Elective III", credits: 3 },
            { code: "C138X", title: "Open Elective II", credits: 3 },
            { code: "CSB1331", title: "Web Technology Laboratory", credits: 1 },
            { code: "CSB1332", title: "Design Project", credits: 2 },
            { code: "CSB1333", title: "Comprehension", credits: 1 }
        ],
        7: [
            { code: "CSB1401", title: "Mobile Application Development", credits: 3 },
            { code: "GEA1401", title: "Environmental Sciences", credits: 3 },
            { code: "CSB144X", title: "Professional Elective III", credits: 3 },
            { code: "CSB144X", title: "Professional Elective IV", credits: 3 },
            { code: "GEA14XX", title: "Management Elective Course", credits: 3 },
            { code: "CSB1411", title: "Project Phase I", credits: 2 }
        ],
        8: [
            { code: "CSB1431", title: "Project Work", credits: 8 }
        ]
    },
    // IT Curriculum Presets
    it: {
        1: [
            { code: "GEA1101", title: "Engineering Mathematics I", credits: 4 },
            { code: "CGB1101", title: "Web Application Development", credits: 3 },
            { code: "GEA1102", title: "Engineering Physics", credits: 3 },
            { code: "GEA1104", title: "Universal Human Values", credits: 3 },
            { code: "GEA1108", title: "Heritage of Tamils", credits: 1 },
            { code: "GEA1109", title: "Indian Constitution", credits: 0 },
            { code: "GEA1106", title: "Technical English", credits: 3 },
            { code: "GEA1107", title: "C Programming", credits: 4 },
            { code: "GEA1111", title: "Engineering Physics Laboratory", credits: 1 },
            { code: "CGB1111", title: "Web Application Development Laboratory", credits: 1 }
        ],
        2: [
            { code: "FLCXXXX", title: "Language Elective", credits: 3 },
            { code: "CGA1101", title: "Basics of Engineering", credits: 3 },
            { code: "GEA1103", title: "Engineering Chemistry", credits: 3 },
            { code: "GEA1122", title: "Tamils and Technology", credits: 1 },
            { code: "GEA1123", title: "Career Skill Development I", credits: 1 },
            { code: "GEA1121", title: "Engineering Mathematics II", credits: 4 },
            { code: "CGB1121", title: "Python Programming", credits: 4 },
            { code: "CGB1122", title: "Data Structures", credits: 4 },
            { code: "CGA1111", title: "Basics of Engineering Laboratory", credits: 1 },
            { code: "GEA1112", title: "Engineering Chemistry Laboratory", credits: 1 }
        ],
        3: [
            { code: "ITB1201", title: "Computer Architecture and Processors", credits: 3 },
            { code: "CGB1202", title: "Design and Analysis of Algorithms", credits: 3 },
            { code: "CGB1203", title: "Agile Development Methodology", credits: 3 },
            { code: "CGB1204", title: "Data Science", credits: 3 },
            { code: "GEA1202", title: "Career Skill Development II", credits: 1 },
            { code: "GEA1201", title: "Engineering Mathematics III", credits: 4 },
            { code: "CGB1201", title: "Java Programming", credits: 4 },
            { code: "CGB1211", title: "Design and Analysis of Algorithms Laboratory", credits: 1 },
            { code: "CGB1212", title: "Data Science Laboratory", credits: 1 },
            { code: "GEA1211", title: "Business Communication", credits: 2 }
        ],
        4: [
            { code: "CGA1221", title: "Probability and Statistics", credits: 4 },
            { code: "CGB1222", title: "Artificial Intelligence and Machine Learning", credits: 3 },
            { code: "ITB1221", title: "Object Oriented Modelling", credits: 3 },
            { code: "CGB1223", title: "Operating Systems", credits: 3 },
            { code: "ITC129X", title: "Emerging Elective I", credits: 3 },
            { code: "CGB1221", title: "Database Management Systems", credits: 4 },
            { code: "CGB1231", title: "Artificial Intelligence and Machine Learning Laboratory", credits: 1 },
            { code: "CGB1232", title: "Operating Systems Laboratory", credits: 1 },
            { code: "ITB1231", title: "Object Oriented Modelling Laboratory (Design Thinking)", credits: 2 },
            { code: "GEA1221", title: "Career Skill Development III", credits: 1 }
        ],
        5: [
            { code: "ITB1301", title: "Data Communication and Computer Networking", credits: 3 },
            { code: "ITB1302", title: "Web-Computing Technologies", credits: 3 },
            { code: "ITC1301", title: "Open Elective I", credits: 3 },
            { code: "GEA1301", title: "Career Skill Development IV", credits: 1 },
            { code: "ITB1303", title: "Data Mining Techniques", credits: 4 },
            { code: "ITC1302", title: "Professional Elective I", credits: 3 },
            { code: "ITC1303", title: "Emerging Elective - II", credits: 3 },
            { code: "CGB1231", title: "Computer Networking Laboratory", credits: 1 },
            { code: "CGB1232", title: "Web-Computing Technologies Laboratory", credits: 1 }
        ],
        6: [
            { code: "ITB1321", title: "Network Security and Cryptography", credits: 3 },
            { code: "ITB1322", title: "Distributed Computing", credits: 3 },
            { code: "ITB1323", title: "Business Intelligence", credits: 4 },
            { code: "ITC1321", title: "Professional Elective II", credits: 3 },
            { code: "ITC1322", title: "Emerging Elective III", credits: 3 },
            { code: "ITC1323", title: "Open Elective II", credits: 3 },
            { code: "ITB1331", title: "Network Security and Cryptography Laboratory", credits: 1 },
            { code: "ITB1332", title: "Design Project", credits: 2 },
            { code: "ITB1333", title: "Comprehension", credits: 1 }
        ],
        7: [
            { code: "ITB1401", title: "Embedded Systems and IoT", credits: 3 },
            { code: "GEA1401", title: "Environmental Sciences", credits: 3 },
            { code: "ITC1401", title: "Professional Elective III", credits: 3 },
            { code: "ITC1402", title: "Professional Elective IV", credits: 3 },
            { code: "GEA14XX", title: "Management Elective Course", credits: 3 },
            { code: "ITB1411", title: "Project Phase I", credits: 2 }
        ],
        8: [
            { code: "ITB1421", title: "Project Work / Industrial Training", credits: 10 }
        ]
    },
    // AIDS Curriculum Presets
    "ai-ds": {
        1: [
            { code: "GEA1104", title: "Universal Human Values", credits: 3 },
            { code: "GEA1101", title: "Engineering Mathematics I", credits: 4 },
            { code: "GEA1102", title: "Engineering Physics", credits: 3 },
            { code: "CGA1101", title: "Basics of Engineering", credits: 3 },
            { code: "GEA1108", title: "Heritage of Tamils", credits: 1 },
            { code: "GEA1109", title: "Indian Constitution", credits: 0 },
            { code: "GEA1106", title: "Technical English", credits: 3 },
            { code: "GEA1107", title: "C Programming", credits: 4 },
            { code: "GEA1111", title: "Engineering Physics Laboratory", credits: 1 },
            { code: "CGA1111", title: "Basics of Engineering Laboratory", credits: 1 }
        ],
        2: [
            { code: "FLC11XX", title: "Language Elective", credits: 3 },
            { code: "GEA1105", title: "Engineering Graphics", credits: 3 },
            { code: "GEA1103", title: "Engineering Chemistry", credits: 3 },
            { code: "ADI1111", title: "Python Programming for Data Science", credits: 3 },
            { code: "GEA1122", title: "Tamils and Technology", credits: 1 },
            { code: "GEA1123", title: "Career Skill Development I", credits: 1 },
            { code: "GEA1121", title: "Engineering Mathematics II", credits: 4 },
            { code: "CGB1122", title: "Data Structures", credits: 4 },
            { code: "GEA1112", title: "Engineering Chemistry Laboratory", credits: 1 },
            { code: "ADI1112", title: "Python Programming for Data Science Laboratory", credits: 1 }
        ],
        5: [
            { code: "AGB1301", title: "Optimization Techniques", credits: 4 },
            { code: "ADI1301", title: "Predictive Modelling and Analytics", credits: 3 },
            { code: "AXX13XX", title: "Professional Elective I", credits: 3 },
            { code: "AXX13XX", title: "Emerging Elective II", credits: 3 },
            { code: "C13XX", title: "Open Elective I", credits: 3 },
            { code: "ADI1303", title: "Spark and Scala Fundamentals", credits: 4 },
            { code: "ADI1311", title: "Predictive Modelling and Analytics Laboratory", credits: 1 },
            { code: "GEA1301", title: "Career Skill Development IV", credits: 1 }
        ]
    },
    // AIML Curriculum Presets
    "ai-ml": {
        8: [
            { code: "", title: "Project Work", credits: 16 }
        ]
    },
    // Civil Engineering Curriculum Presets
    civil: {
        1: [
            { code: "GEA1104", title: "Universal Human Values", credits: 3 },
            { code: "GEA1101", title: "Engineering Mathematics I", credits: 4 },
            { code: "GEA1102", title: "Engineering Physics", credits: 3 },
            { code: "CGA1101", title: "Basics of Engineering", credits: 3 },
            { code: "GEA1108", title: "Heritage of Tamils", credits: 1 },
            { code: "GEA1109", title: "Indian Constitution", credits: 0 },
            { code: "GEA1106", title: "Technical English", credits: 3 },
            { code: "GEA1107", title: "C Programming", credits: 4 },
            { code: "GEA1111", title: "Engineering Physics Laboratory", credits: 1 },
            { code: "CGA1111", title: "Basics of Engineering Laboratory", credits: 1 }
        ],
        2: [
            { code: "FLC11XX", title: "Language Elective", credits: 3 },
            { code: "GEA1105", title: "Engineering Graphics", credits: 3 },
            { code: "GEA1103", title: "Engineering Chemistry", credits: 3 },
            { code: "ADI1111", title: "Python Programming for Data Science", credits: 3 },
            { code: "GEA1122", title: "Tamils and Technology", credits: 1 },
            { code: "GEA1123", title: "Career Skill Development I", credits: 1 },
            { code: "GEA1121", title: "Engineering Mathematics II", credits: 4 },
            { code: "CGB1122", title: "Data Structures", credits: 4 },
            { code: "GEA1112", title: "Engineering Chemistry Laboratory", credits: 1 },
            { code: "ADI1112", title: "Python Programming for Data Science Laboratory", credits: 1 }
        ],
        3: [
            { code: "CEB1201", title: "Mechanics of Solids", credits: 3 },
            { code: "CEB1202", title: "Water Supply Engineering", credits: 3 },
            { code: "CEB1203", title: "Concrete Technology", credits: 3 },
            { code: "CEB1204", title: "Highway and Railway Engineering", credits: 3 },
            { code: "GEA1201", title: "Engineering Mathematics III", credits: 4 },
            { code: "MGB1201", title: "Python Programming", credits: 4 },
            { code: "CEB1211", title: "Concrete and Highway Engineering Laboratory", credits: 1 },
            { code: "CEB1212", title: "Design Thinking & Computer Aided Building Drawing Lab", credits: 2 },
            { code: "CEB1213", title: "Environmental Engineering Laboratory", credits: 1 },
            { code: "GEA1202", title: "Career Skill Development II", credits: 1 }
        ],
        4: [
            { code: "CEB1221", title: "Functional Design of Buildings", credits: 3 },
            { code: "CEB1222", title: "Wastewater Engineering", credits: 3 },
            { code: "CEC12XX", title: "Emerging Elective I", credits: 3 },
            { code: "CEB1223", title: "Fluid Mechanics and Hydraulic Engineering", credits: 3 },
            { code: "CEB1224", title: "Geotechnical Engineering", credits: 4 },
            { code: "CEB1225", title: "Strength of Materials", credits: 4 },
            { code: "CEB1231", title: "Fluid and Hydraulics Engineering Laboratory", credits: 1 },
            { code: "CEB1232", title: "Material Behavior and Analysis Laboratory", credits: 1 },
            { code: "GEA1211", title: "Business Communication", credits: 2 },
            { code: "GEA1221", title: "Career Skill Development III", credits: 1 }
        ]
    },
    // CSBS Curriculum Presets
    "cs-bs": {
        1: [
            { code: "CBA1101", title: "Introductory Topics in Statistics, Probability and Calculus", credits: 3 },
            { code: "CBA1102", title: "Discrete Mathematics for Computer Science", credits: 4 },
            { code: "CBA1103", title: "Business Communication and Value Science – I", credits: 2 },
            { code: "CBA1104", title: "Principles of Electrical Engineering", credits: 3 },
            { code: "CBB1101", title: "Fundamentals of Computer Science", credits: 4 },
            { code: "CBA1105", title: "Physics for Computing Science", credits: 3 },
            { code: "GEA1108", title: "Heritage of Tamils", credits: 1 },
            { code: "GEA1109", title: "Indian Constitution", credits: 0 }
        ],
        2: [
            { code: "CBA1121", title: "Linear Algebra", credits: 4 },
            { code: "CBA1122", title: "Business Communication and Value Science – II", credits: 2 },
            { code: "CBA1123", title: "Fundamentals of Economics", credits: 2 },
            { code: "GEA1104", title: "Universal Human Values", credits: 3 },
            { code: "CBB1121", title: "Data Structures and Algorithms", credits: 4 },
            { code: "CBA1124", title: "Statistical Methods and Modelling", credits: 4 },
            { code: "CBA1125", title: "Principles of Electronics", credits: 3 },
            { code: "GEA1122", title: "Tamils and Technology", credits: 1 },
            { code: "GEA1123", title: "Career Skill Development I", credits: 1 }
        ],
        3: [
            { code: "CBB1201", title: "Formal Language and Automata Theory", credits: 4 },
            { code: "CBB1202", title: "Computer Organization and Architecture", credits: 3 },
            { code: "CBA1201", title: "Fundamentals of Management", credits: 2 },
            { code: "CBA1202", title: "Human Resource Management", credits: 2 },
            { code: "CBB1203", title: "Object Oriented Programming", credits: 4 },
            { code: "CBA1203", title: "Computational Statistics", credits: 4 },
            { code: "CBB1204", title: "Software Engineering", credits: 4 },
            { code: "GEA1202", title: "Career Skill Development II", credits: 1 },
            { code: "GEA1203", title: "Environmental Sciences", credits: 0 }
        ],
        4: [
            { code: "CBA1221", title: "Marketing Research and Marketing Management", credits: 2 },
            { code: "CBA1222", title: "Introduction to Innovation, IP Management and Entrepreneurship", credits: 3 },
            { code: "CBA1223", title: "Operations Research", credits: 3 },
            { code: "CBB1221", title: "Database Management Systems", credits: 4 },
            { code: "CBB1222", title: "Operating Systems", credits: 4 },
            { code: "CBB1223", title: "Software Design with UML", credits: 4 },
            { code: "CBA1224", title: "Business Communication and Value Science – III", credits: 2 },
            { code: "GEA1221", title: "Career Skill Development III", credits: 1 }
        ],
        5: [
            { code: "CBA1301", title: "Financial Management", credits: 2 },
            { code: "CBC13xx", title: "Professional Elective – II", credits: 3 },
            { code: "CBB1301", title: "Design and Analysis of Algorithms", credits: 4 },
            { code: "CBB1302", title: "Machine Learning", credits: 4 },
            { code: "CBB1303", title: "Computer Networks", credits: 4 },
            { code: "CBA1302", title: "Design Thinking", credits: 3 },
            { code: "CBC13xx", title: "Professional Elective – I", credits: 4 },
            { code: "GEA1301", title: "Career Skill Development IV", credits: 1 }
        ],
        6: [
            { code: "CBA1321", title: "Financial and Cost Accounting", credits: 2 },
            { code: "CBB1321", title: "Cloud Computing", credits: 3 },
            { code: "CBB1322", title: "Information Security", credits: 4 },
            { code: "CBB1323", title: "Artificial Intelligence", credits: 4 },
            { code: "CBA1322", title: "Business Communication and Value Science– IV", credits: 3 },
            { code: "CBC13xx", title: "Professional Elective – III", credits: 4 },
            { code: "CBC13xx", title: "Professional Elective – IV", credits: 4 },
            { code: "CBB1331", title: "Mini Project", credits: 1 }
        ],
        7: [
            { code: "CBA1401", title: "IT Project Management", credits: 3 },
            { code: "CBC14xx", title: "Professional Elective– V", credits: 3 },
            { code: "CBB1401", title: "Usability Design of Software Applications", credits: 3 },
            { code: "CBB1402", title: "IT Workshop Scilab / Matlab", credits: 3 },
            { code: "CBB1403", title: "Data Visualization", credits: 4 },
            { code: "CBC14xx", title: "Professional Elective– VI", credits: 4 }
        ],
        8: [
            { code: "CBB1431", title: "Project Evaluation", credits: 7 }
        ]
    },
    // EEE Curriculum Presets
    eee: {
        1: [
            { code: "GEA1101", title: "Engineering Mathematics I", credits: 4 },
            { code: "EEA1101", title: "Basic Civil and Mechanical Engineering", credits: 3 },
            { code: "GEA1103", title: "Engineering Chemistry", credits: 3 },
            { code: "GEA1105", title: "Engineering Graphics", credits: 3 },
            { code: "GEA1108", title: "Heritage of Tamils", credits: 1 },
            { code: "GEA1109", title: "Indian Constitution", credits: 0 },
            { code: "GEA1106", title: "Technical English", credits: 3 },
            { code: "GEA1107", title: "C Programming", credits: 4 },
            { code: "GEA1112", title: "Engineering Chemistry Laboratory", credits: 1 },
            { code: "EEA1111", title: "Basic Civil & Mechanical Engineering Lab", credits: 1 }
        ],
        2: [
            { code: "GEA1102", title: "Engineering Physics", credits: 3 },
            { code: "EGB1122", title: "Python Programming", credits: 4 },
            { code: "FLC11XX", title: "Language Elective", credits: 3 },
            { code: "EEB1121", title: "Electric Circuit Analysis", credits: 3 },
            { code: "GEA1121", title: "Engineering Mathematics II", credits: 4 },
            { code: "EGB1121", title: "Data Structures", credits: 4 },
            { code: "GEA1111", title: "Engineering Physics Laboratory", credits: 1 },
            { code: "EEB1131", title: "Electric Circuit Analysis Laboratory", credits: 1 },
            { code: "GEA1123", title: "Career Skill Development I", credits: 1 },
            { code: "GEA1122", title: "Tamils and Technology", credits: 1 }
        ],
        3: [
            { code: "EEB1201", title: "Electromagnetic Fields", credits: 3 },
            { code: "EEB1202", title: "Electrical Machines-I", credits: 3 },
            { code: "EEB1203", title: "Measurements and Instrumentation", credits: 3 },
            { code: "EEB1204", title: "Electron Devices and Circuits", credits: 4 },
            { code: "GEA1201", title: "Engineering Mathematics III", credits: 4 },
            { code: "EGB1201", title: "Java Programming", credits: 4 },
            { code: "GEA1211", title: "Business Communication", credits: 2 },
            { code: "EEB1211", title: "Electrical Machines-I Laboratory", credits: 1 },
            { code: "GEA1202", title: "Career Skill Development II", credits: 1 }
        ],
        4: [
            { code: "EEB1221", title: "Electrical Machines- II", credits: 3 },
            { code: "EEB1222", title: "Generation, Transmission and Distribution", credits: 3 },
            { code: "EEB1223", title: "Control Systems", credits: 4 },
            { code: "EEC129X", title: "Emerging Elective I", credits: 3 },
            { code: "EEB1224", title: "Linear Integrated Circuits", credits: 3 },
            { code: "EGB1221", title: "Database Management System", credits: 4 },
            { code: "EEB1231", title: "Electrical Machines- II Laboratory", credits: 1 },
            { code: "EEB1232", title: "Control and Instrumentation Laboratory", credits: 1 },
            { code: "EEB1233", title: "Design Thinking", credits: 2 },
            { code: "GEA1221", title: "Career Skill Development III", credits: 1 }
        ],
        5: [
            { code: "EEB1301", title: "Power System Analysis", credits: 3 },
            { code: "EEB1302", title: "Power Electronics", credits: 3 },
            { code: "EEB1303", title: "Digital Logic Circuits", credits: 4 },
            { code: "EEC134X", title: "Professional Elective I", credits: 3 },
            { code: "EEC136X", title: "Emerging Elective II", credits: 3 },
            { code: "XXC13XX", title: "Open Elective I", credits: 3 },
            { code: "EEB1311", title: "Linear Integrated Circuits Laboratory", credits: 1 },
            { code: "EEB1312", title: "Power Electronics Laboratory", credits: 1 },
            { code: "GEA1301", title: "Career Skill Development IV", credits: 1 }
        ],
        6: [
            { code: "EEB1321", title: "Power System Operation and Control", credits: 3 },
            { code: "EEB1322", title: "Protection and Switchgear", credits: 3 },
            { code: "EEI137X", title: "Professional Elective II", credits: 3 },
            { code: "EEC139X", title: "Emerging Elective III", credits: 3 },
            { code: "XXC13XX", title: "Open Elective II", credits: 3 },
            { code: "EEB1323", title: "Microprocessor and Microcontroller", credits: 4 },
            { code: "EEB1331", title: "Power System Simulation Laboratory", credits: 1 },
            { code: "EEB1332", title: "Design Project", credits: 2 },
            { code: "EEB1333", title: "Comprehension", credits: 1 }
        ],
        7: [
            { code: "EEB1401", title: "Electrical Energy Utilization and Conservation", credits: 3 },
            { code: "EEC144X", title: "Professional Elective III", credits: 3 },
            { code: "EEC144X", title: "Professional Elective IV", credits: 3 },
            { code: "GEA1104", title: "Universal Human Values / Mgt Elective", credits: 3 },
            { code: "GEA1401", title: "Environmental Sciences", credits: 3 },
            { code: "EEB1411", title: "Project Phase I", credits: 2 }
        ],
        8: [
            { code: "EEB1431", title: "Project Work", credits: 8 }
        ]
    },
    // ECE Curriculum Presets
    ece: {
        1: [
            { code: "GEA1101", title: "Engineering Mathematics I", credits: 3 },
            { code: "GEA1102", title: "Engineering Physics", credits: 3 },
            { code: "ECB1102", title: "Circuit Analysis", credits: 3 },
            { code: "ECB1103", title: "Electron Devices", credits: 3 },
            { code: "GEA1106", title: "Technical English", credits: 3 },
            { code: "GEA1107", title: "C Programming", credits: 4 },
            { code: "GEA1111", title: "Engineering Physics Laboratory", credits: 1 },
            { code: "ECB1111", title: "Electric Circuits and Electron Devices Lab", credits: 1 },
            { code: "GEA1108", title: "Heritage of Tamils", credits: 1 },
            { code: "GEA1109", title: "Indian Constitution", credits: 0 }
        ],
        2: [
            { code: "FLC118X", title: "Language Elective", credits: 3 },
            { code: "GEA1103", title: "Engineering Chemistry", credits: 3 },
            { code: "ECB1121", title: "Electronic Circuits", credits: 3 },
            { code: "GEA1121", title: "Engineering Mathematics II", credits: 4 },
            { code: "EGB1122", title: "Python Programming", credits: 4 },
            { code: "EGB1121", title: "Data Structures", credits: 4 },
            { code: "GEA1112", title: "Engineering Chemistry Laboratory", credits: 1 },
            { code: "ECB1131", title: "Electronic Circuits Laboratory", credits: 1 },
            { code: "GEA1123", title: "Career Skill Development I", credits: 1 },
            { code: "GEA1122", title: "Tamils and Technology", credits: 1 }
        ],
        3: [
            { code: "ECB1201", title: "Digital Electronics", credits: 3 },
            { code: "ECB1202", title: "Electromagnetic Theory", credits: 3 },
            { code: "ECB1203", title: "Signals and Systems", credits: 3 },
            { code: "GEA1202", title: "Career Skill Development II", credits: 1 },
            { code: "GEA1201", title: "Engineering Mathematics III", credits: 4 },
            { code: "ECB1204", title: "Analog Integrated Circuits", credits: 4 },
            { code: "EGB1201", title: "Java Programming", credits: 4 },
            { code: "ECB1211", title: "Digital Electronics Lab", credits: 1 },
            { code: "ECB1212", title: "Design Thinking", credits: 2 }
        ],
        4: [
            { code: "ECB1221", title: "Analog and Digital Communication", credits: 3 },
            { code: "ECB1222", title: "Transmission Lines and Waveguides", credits: 3 },
            { code: "ECC12XX", title: "Emerging Elective I", credits: 3 },
            { code: "ECB1223", title: "Microcontrollers and its Interfacing", credits: 4 },
            { code: "ECB1224", title: "Digital Signal Processing", credits: 4 },
            { code: "EGB1221", title: "Database Management System", credits: 4 },
            { code: "ECB1231", title: "Analog & Digital Communication Laboratory", credits: 1 },
            { code: "GEA1211", title: "Business Communication", credits: 2 },
            { code: "GEA1221", title: "Career Skill Development III", credits: 1 }
        ]
    }
};

// DEPARTMENT PREFIX DETAILS FOR FALLBACK GENERATION
const DEPT_INFO = {
    "ai-ds": { prefix: "AD", name: "Artificial Intelligence and Data Science" },
    "ai-ml": { prefix: "AM", name: "Artificial Intelligence and Machine Learning" },
    "civil": { prefix: "CE", name: "Civil Engineering" },
    "cs-bs": { prefix: "CB", name: "Computer Science and Business Systems" },
    "cse": { prefix: "CS", name: "Computer Science and Engineering" },
    "eee": { prefix: "EE", name: "Electrical and Electronics Engineering" },
    "ece": { prefix: "EC", name: "Electronics and Communication Engineering" },
    "vlsi": { prefix: "VL", name: "Electronics Engineering (VLSI)" },
    "it": { prefix: "IT", name: "Information Technology" },
    "mech": { prefix: "ME", name: "Mechanical Engineering" }
};

// DYNAMIC CURRICULUM GENERATOR FOR FALLBACKS
function generatePreset(deptKey, semesterNum) {
    // If we have explicit presets, return it
    if (CURRICULUM_PRESETS[deptKey] && CURRICULUM_PRESETS[deptKey][semesterNum]) {
        return JSON.parse(JSON.stringify(CURRICULUM_PRESETS[deptKey][semesterNum]));
    }
    
    // Otherwise, return an empty array (no procedurally generated fallbacks)
    return [];
}

// APPLICATION STATE MAPPINGS
const DEFAULT_GRADE_SCALE = {
    "O": 10,
    "A+": 9,
    "A": 8,
    "B+": 7,
    "B": 6,
    "C": 5,
    "U": 0
};

let appState = {
    selectedDept: "cse",
    selectedYear: "1",
    selectedSem: "1",
    courses: [],
    history: [],
    gradeScale: { ...DEFAULT_GRADE_SCALE },
    decimals: 2,
    theme: "light",
    regulations: "Regulations 2022"
};

// LOAD INITIAL STATE FROM LOCAL STORAGE
function loadLocalStorage() {
    try {
        const savedState = localStorage.getItem("mkce_cgpa_tracker_state");
        if (savedState) {
            const parsed = JSON.parse(savedState);
            appState.selectedDept = parsed.selectedDept || "cse";
            appState.selectedYear = parsed.selectedYear || "1";
            appState.selectedSem = parsed.selectedSem || "1";
            appState.history = parsed.history || [];
            appState.gradeScale = parsed.gradeScale || { ...DEFAULT_GRADE_SCALE };
            appState.decimals = parsed.decimals || 2;
            appState.theme = parsed.theme || "dark";
            appState.regulations = parsed.regulations || "Regulations 2022";
        }
    } catch (e) {
        console.error("Error reading LocalStorage data: ", e);
    }
}

// SAVE STATE TO LOCAL STORAGE
function saveLocalStorage() {
    try {
        localStorage.setItem("mkce_cgpa_tracker_state", JSON.stringify(appState));
    } catch (e) {
        console.error("Error writing state to LocalStorage: ", e);
    }
}

// TOAST NOTIFICATIONS HELPER
function showToast(message, type = "success") {
    const wrapper = document.getElementById("toast-wrapper");
    if (!wrapper) return;
    
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    
    let icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
    if (type === "danger") {
        icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
    } else if (type === "info") {
        icon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
    }
    
    toast.innerHTML = `
        ${icon}
        <span>${message}</span>
        <button class="toast-close">&times;</button>
    `;
    
    wrapper.appendChild(toast);
    
    // Close button event
    toast.querySelector(".toast-close").addEventListener("click", () => {
        toast.style.animation = "slideOut 0.25s forwards";
        setTimeout(() => toast.remove(), 250);
    });
    
    // Auto-remove after 4.5 seconds
    setTimeout(() => {
        if (toast.parentNode) {
            toast.style.animation = "slideOut 0.25s forwards";
            setTimeout(() => toast.remove(), 250);
        }
    }, 4500);
}

// COMPUTE SEMESTER SGPA
function calculateSGPA() {
    let totalCredits = 0;
    let totalGradePoints = 0;
    let coursesCount = 0;
    
    appState.courses.forEach(course => {
        const credVal = parseFloat(course.credits);
        if (!isNaN(credVal) && credVal > 0) {
            coursesCount++;
            totalCredits += credVal;
            const points = appState.gradeScale[course.grade];
            if (points !== undefined) {
                totalGradePoints += (credVal * points);
            }
        }
    });
    
    const sgpa = totalCredits > 0 ? (totalGradePoints / totalCredits) : 0;
    const decimals = parseInt(appState.decimals);
    
    // Update visual stats in HTML
    document.getElementById("stat-total-credits").innerText = totalCredits.toFixed(1);
    document.getElementById("stat-grade-points").innerText = totalGradePoints.toFixed(decimals);
    document.getElementById("stat-courses-count").innerText = coursesCount;
    document.getElementById("stat-gpa-scale").innerText = "10.0";
    
    // Update SGPA value display
    document.getElementById("sgpa-val").innerText = sgpa.toFixed(decimals);
    
    // Update circular gauge meter (semicircle)
    const fill = document.getElementById("sgpa-gauge-fill");
    if (fill) {
        const circumference = 188.5; // Semicircle length
        const percent = sgpa / 10;
        const offset = circumference - (percent * circumference);
        fill.style.strokeDashoffset = offset;
    }
    
    // Set descriptive message based on performance
    const label = document.getElementById("sgpa-status-label");
    const desc = document.getElementById("sgpa-status-desc");
    
    const hasArrears = appState.courses.some(course => course.grade === "U" && parseFloat(course.credits) > 0);
    
    if (sgpa === 0) {
        label.innerText = "Semester SGPA Status";
        desc.innerText = "Fill in grades in the course sheet above to see your computed semester grade point average and academic standing insights.";
    } else if (hasArrears) {
        label.innerText = "Arrears / Re-appearance Alert ⚠️";
        desc.innerText = `Your Semester SGPA is computed as ${sgpa.toFixed(decimals)}. You have pending subjects with 'U' grade. We recommend clearing these subjects in the upcoming examinations to restore your academic eligibility.`;
    } else if (sgpa >= 9.0) {
        label.innerText = "Distinction Grade Eligible! 🏆";
        desc.innerText = `Outstanding Semester SGPA of ${sgpa.toFixed(decimals)}. You are performing in the top 5% of students and are fully on track for a First Class with Distinction. Maintain this elite average!`;
    } else if (sgpa >= 8.0) {
        label.innerText = "First Class standing! 🌟";
        desc.innerText = `Excellent academic standing with an SGPA of ${sgpa.toFixed(decimals)}. You easily qualify for a First Class division. Keep up the high standards!`;
    } else if (sgpa >= 6.5) {
        label.innerText = "First Class Candidate 👍";
        desc.innerText = `Solid Semester SGPA of ${sgpa.toFixed(decimals)}. You are eligible for a First Class division. Pushing slightly harder in high-credit subjects will secure your position.`;
    } else if (sgpa >= 5.0) {
        label.innerText = "Second Class standing 🎓";
        desc.innerText = `Semester SGPA is ${sgpa.toFixed(decimals)}. You have successfully passed all courses. Focus on strengthening your core concept understanding next semester to lift your graduation rank.`;
    } else {
        label.innerText = "Action Required ⚠️";
        desc.innerText = `Semester SGPA is ${sgpa.toFixed(decimals)}. Your average is below the pass threshold. Please seek academic guidance to clear pending papers.`;
    }
    
    return { sgpa, totalCredits };
}

// COMPUTE CUMULATIVE CGPA
function calculateCGPA() {
    let cumulativeProduct = 0;
    let totalCredits = 0;
    let activeSemsCount = 0;
    
    appState.history.forEach(sem => {
        const credits = parseFloat(sem.credits);
        const sgpa = parseFloat(sem.sgpa);
        if (!isNaN(credits) && !isNaN(sgpa) && credits > 0) {
            cumulativeProduct += (sgpa * credits);
            totalCredits += credits;
            activeSemsCount++;
        }
    });
    
    const cgpa = totalCredits > 0 ? (cumulativeProduct / totalCredits) : 0;
    const decimals = parseInt(appState.decimals);
    
    // Update summary labels
    document.getElementById("cgpa-active-sems").innerText = activeSemsCount;
    document.getElementById("cgpa-total-credits").innerText = totalCredits.toFixed(1);
    document.getElementById("cgpa-val").innerText = cgpa.toFixed(decimals);
    
    // Update CGPA circular gauge (semicircle)
    const fill = document.getElementById("cgpa-gauge-fill");
    if (fill) {
        const circumference = 188.5; // Semicircle length
        const percent = cgpa / 10;
        const offset = circumference - (percent * circumference);
        fill.style.strokeDashoffset = offset;
    }
    
    // Performance Classification Label
    const classification = document.getElementById("cgpa-classification");
    const classificationSub = document.getElementById("cgpa-classification-sub");
    
    if (cgpa === 0) {
        classification.innerText = "N/A";
        classification.style.color = "var(--text-muted)";
        classificationSub.innerText = "Save semesters to calculate";
    } else if (cgpa >= 8.5) {
        classification.innerText = "First Class with Distinction";
        classification.style.color = "var(--accent-success)";
        classificationSub.innerText = "Exceptional performance across semesters!";
    } else if (cgpa >= 6.5) {
        classification.innerText = "First Class Division";
        classification.style.color = "var(--accent-secondary)";
        classificationSub.innerText = "Good steady performance. Keep maintaining!";
    } else if (cgpa >= 5.0) {
        classification.innerText = "Second Class Division";
        classification.style.color = "var(--accent-warning)";
        classificationSub.innerText = "Clear standing. Push for a higher score.";
    } else {
        classification.innerText = "Arrears / Re-appearance Status";
        classification.style.color = "var(--accent-danger)";
        classificationSub.innerText = "Current cumulative scale falls below pass minimum.";
    }
    
    // Re-draw SVG Trend Chart
    renderChart();
}

// RENDER GRID ROWS FOR COURSE SHEET TABLE
function renderCourseTable() {
    const tbody = document.getElementById("courses-tbody");
    tbody.innerHTML = "";
    
    appState.courses.forEach((course, index) => {
        const tr = document.createElement("tr");
        
        // Generate options for grades
        let gradeOptions = "";
        Object.keys(appState.gradeScale).forEach(gradeKey => {
            const selected = course.grade === gradeKey ? "selected" : "";
            gradeOptions += `<option value="${gradeKey}" ${selected}>${gradeKey}</option>`;
        });
        
        tr.innerHTML = `
            <td>
                <input type="text" class="table-input input-code" value="${course.code}" placeholder="CS3101" data-index="${index}" data-field="code">
            </td>
            <td>
                <input type="text" class="table-input input-text" value="${course.title}" placeholder="Course Name" data-index="${index}" data-field="title">
            </td>
            <td>
                <input type="number" class="table-input input-number" step="0.5" min="0.5" max="20" value="${course.credits}" data-index="${index}" data-field="credits">
            </td>
            <td>
                <div class="select-wrapper">
                    <select class="custom-select table-input-select" data-index="${index}" data-field="grade" style="padding: 6px 30px 6px 12px; font-size: 0.85rem; border-radius: 8px;">
                        ${gradeOptions}
                    </select>
                </div>
            </td>
            <td style="text-align: center;">
                <button class="btn-remove-row btn-remove-timeline" data-index="${index}" title="Remove Course" style="width: 32px; height: 32px;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 4H8l-7 8 7 8h13a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/><line x1="18" y1="9" x2="12" y2="15"/><line x1="12" y1="9" x2="18" y2="15"/></svg>
                </button>
            </td>
        `;
        
        tbody.appendChild(tr);
    });
    
    // Add Event Listeners for inline inputs
    tbody.querySelectorAll(".table-input").forEach(input => {
        input.addEventListener("input", handleTableInput);
    });
    tbody.querySelectorAll(".table-input-select").forEach(select => {
        select.addEventListener("change", handleTableInput);
    });
    tbody.querySelectorAll(".btn-remove-row").forEach(btn => {
        btn.addEventListener("click", deleteRow);
    });
    
    // Recalculate SGPA
    calculateSGPA();
}

// INLINE TABLE INPUT HANDLER
function handleTableInput(e) {
    const index = parseInt(e.target.dataset.index);
    const field = e.target.dataset.field;
    let val = e.target.value;
    
    if (field === "credits") {
        val = parseFloat(val);
        if (isNaN(val) || val < 0) val = 0;
    }
    
    appState.courses[index][field] = val;
    calculateSGPA();
    saveLocalStorage();
}

// ADD NEW COURSE ROW
function addRow() {
    appState.courses.push({
        code: `CS${100 + appState.courses.length}`,
        title: `Professional Course ${appState.courses.length + 1}`,
        credits: 3,
        grade: "O"
    });
    renderCourseTable();
    saveLocalStorage();
}

// DELETE COURSE ROW
function deleteRow(e) {
    let target = e.currentTarget;
    const index = parseInt(target.dataset.index);
    appState.courses.splice(index, 1);
    renderCourseTable();
    saveLocalStorage();
}

// RELOAD DYNAMIC PRESET FOR SELECT COMBINATION
function loadPresetCurriculum() {
    appState.courses = generatePreset(appState.selectedDept, appState.selectedSem);
    renderCourseTable();
    const deptText = DEPT_INFO[appState.selectedDept]?.name || appState.selectedDept;
    showToast(`Loaded preset curriculum for ${deptText} - Semester ${appState.selectedSem}`);
    saveLocalStorage();
}

// SAVE CURRENT SEMESTER RESULT TO HISTORY TIMELINE
function saveSemester() {
    const { sgpa, totalCredits } = calculateSGPA();
    
    if (totalCredits === 0) {
        showToast("Cannot save a semester with zero credits! Add some courses.", "danger");
        return;
    }
    
    // Verify if this semester is already saved in history
    const existingIndex = appState.history.findIndex(item => 
        item.dept === appState.selectedDept && 
        item.sem === appState.selectedSem
    );
    
    const semesterData = {
        id: Date.now(),
        dept: appState.selectedDept,
        year: appState.selectedYear,
        sem: appState.selectedSem,
        courses: JSON.parse(JSON.stringify(appState.courses)),
        sgpa: sgpa,
        credits: totalCredits,
        regulation: appState.regulations
    };
    
    if (existingIndex >= 0) {
        // Overwrite
        appState.history[existingIndex] = semesterData;
        showToast(`Updated performance record for Semester ${appState.selectedSem} in history.`);
    } else {
        // Append
        appState.history.push(semesterData);
        showToast(`Saved Semester ${appState.selectedSem} performance to dashboard.`);
    }
    
    // Sort history by semester number
    appState.history.sort((a, b) => parseInt(a.sem) - parseInt(b.sem));
    
    renderHistoryTimeline();
    calculateCGPA();
    saveLocalStorage();
}

// RENDER SAVED HISTORY LIST
function renderHistoryTimeline() {
    const container = document.getElementById("history-timeline-container");
    const noHistory = document.getElementById("no-history-text");
    
    // Clean old timeline items
    const oldItems = container.querySelectorAll(".timeline-item");
    oldItems.forEach(item => item.remove());
    
    if (appState.history.length === 0) {
        noHistory.style.display = "block";
        return;
    }
    
    noHistory.style.display = "none";
    
    appState.history.forEach((sem, index) => {
        const item = document.createElement("div");
        item.className = "timeline-item";
        
        const deptText = DEPT_INFO[sem.dept]?.name || sem.dept;
        const decimals = parseInt(appState.decimals);
        
        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content">
                <div class="timeline-info">
                    <h4>Semester ${sem.sem} (${deptText})</h4>
                    <p>Credits: ${sem.credits.toFixed(1)} | ${sem.courses.length} courses | ${sem.regulation}</p>
                </div>
                <div class="timeline-score">
                    <span class="timeline-gpa">SGPA: ${sem.sgpa.toFixed(decimals)}</span>
                    <button class="btn-remove-timeline" data-index="${index}" title="Remove from cumulative summary">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                    </button>
                </div>
            </div>
        `;
        
        container.appendChild(item);
    });
    
    container.querySelectorAll(".btn-remove-timeline").forEach(btn => {
        btn.addEventListener("click", deleteHistoryItem);
    });
}

// DELETE HISTORY ITEM
function deleteHistoryItem(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    const semNum = appState.history[index].sem;
    appState.history.splice(index, 1);
    
    renderHistoryTimeline();
    calculateCGPA();
    showToast(`Removed Semester ${semNum} from cumulative dashboard.`);
    saveLocalStorage();
}

// DYNAMICALLY DRAW HISTORICAL CGPA CHART
function renderChart() {
    const svg = document.getElementById("gpa-chart");
    const linePath = document.getElementById("chart-line-path");
    const areaPath = document.getElementById("chart-area-path");
    const pointsGroup = document.getElementById("chart-points-group");
    const labelsGroup = document.getElementById("chart-labels-group");
    const gridLines = document.getElementById("chart-grid-lines");
    
    // Clear dynamic chart children
    pointsGroup.innerHTML = "";
    labelsGroup.innerHTML = "";
    gridLines.innerHTML = "";
    linePath.setAttribute("d", "");
    areaPath.setAttribute("d", "");
    
    if (appState.history.length === 0) return;
    
    const svgWidth = svg.clientWidth || 700;
    const svgHeight = svg.clientHeight || 180;
    const paddingX = 40;
    const paddingY = 25;
    
    const historyPoints = appState.history;
    const numPoints = historyPoints.length;
    
    // Helper coordinates mapping
    const getX = (index) => {
        if (numPoints <= 1) return svgWidth / 2;
        return paddingX + (index * (svgWidth - 2 * paddingX) / (numPoints - 1));
    };
    
    const getY = (gpa) => {
        // Map 0.0 - 10.0 scale to chart height
        const minGpa = 4.0; // clamp min display to 4.0 for nice curve detail, or 0.0
        const maxGpa = 10.0;
        const effectiveGpa = Math.max(minGpa, Math.min(maxGpa, gpa));
        
        return svgHeight - paddingY - ((effectiveGpa - minGpa) * (svgHeight - 2 * paddingY) / (maxGpa - minGpa));
    };
    
    // 1. Draw horizontal grid lines (for grades 5.0, 6.0, 7.0, 8.0, 9.0, 10.0)
    for (let g = 5; g <= 10; g++) {
        const y = getY(g);
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", paddingX);
        line.setAttribute("y1", y);
        line.setAttribute("x2", svgWidth - paddingX);
        line.setAttribute("y2", y);
        line.setAttribute("stroke", "rgba(255, 255, 255, 0.04)");
        line.setAttribute("stroke-width", "1");
        gridLines.appendChild(line);
        
        // Add axis grid labels on left
        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", paddingX - 10);
        text.setAttribute("y", y + 4);
        text.setAttribute("fill", "var(--text-muted)");
        text.setAttribute("font-size", "9");
        text.setAttribute("text-anchor", "end");
        text.textContent = g.toFixed(0);
        gridLines.appendChild(text);
    }
    
    // 2. Generate line coordinates path
    let pathD = "";
    let areaD = "";
    
    historyPoints.forEach((sem, idx) => {
        const x = getX(idx);
        const y = getY(sem.sgpa);
        
        if (idx === 0) {
            pathD = `M ${x} ${y}`;
            areaD = `M ${x} ${svgHeight - paddingY} L ${x} ${y}`;
        } else {
            pathD += ` L ${x} ${y}`;
            areaD += ` L ${x} ${y}`;
        }
        
        // 3. Draw dot markers
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", x);
        circle.setAttribute("cy", y);
        circle.setAttribute("r", "5");
        circle.setAttribute("class", "chart-point");
        circle.setAttribute("title", `Semester ${sem.sem}: ${sem.sgpa.toFixed(2)}`);
        pointsGroup.appendChild(circle);
        
        // 4. Draw labels on markers
        const valText = document.createElementNS("http://www.w3.org/2000/svg", "text");
        valText.setAttribute("x", x);
        valText.setAttribute("y", y - 10);
        valText.setAttribute("fill", "var(--text-primary)");
        valText.setAttribute("font-size", "10");
        valText.setAttribute("font-weight", "bold");
        valText.setAttribute("text-anchor", "middle");
        valText.textContent = sem.sgpa.toFixed(appState.decimals);
        labelsGroup.appendChild(valText);
        
        // Axis label (Semester Numbers)
        const semLabel = document.createElementNS("http://www.w3.org/2000/svg", "text");
        semLabel.setAttribute("x", x);
        semLabel.setAttribute("y", svgHeight - 8);
        semLabel.setAttribute("fill", "var(--text-secondary)");
        semLabel.setAttribute("font-size", "10");
        semLabel.setAttribute("font-weight", "600");
        semLabel.setAttribute("text-anchor", "middle");
        semLabel.textContent = `Sem ${sem.sem}`;
        labelsGroup.appendChild(semLabel);
    });
    
    // Finish drawing paths
    if (numPoints > 0) {
        linePath.setAttribute("d", pathD);
        
        const lastX = getX(numPoints - 1);
        areaD += ` L ${lastX} ${svgHeight - paddingY} Z`;
        areaPath.setAttribute("d", areaD);
    }
}

// SETUP GRADING SCALE CONFIG TAB INSETTINGS PANEL
function renderSettingsTab() {
    const container = document.getElementById("grade-mappings-container");
    container.innerHTML = "";
    
    Object.keys(appState.gradeScale).forEach(gradeKey => {
        const row = document.createElement("div");
        row.className = "grade-row-config";
        
        row.innerHTML = `
            <span class="grade-name">
                <span class="grade-badge grade-${gradeKey.replace('+', '-plus')}">${gradeKey}</span>
                Grade Designation
            </span>
            <input type="number" step="0.5" min="0" max="100" class="table-input scale-point-input" data-grade="${gradeKey}" value="${appState.gradeScale[gradeKey]}">
        `;
        
        container.appendChild(row);
    });
    
    // Attach listener for config updates
    container.querySelectorAll(".scale-point-input").forEach(input => {
        input.addEventListener("input", (e) => {
            const grade = e.target.dataset.grade;
            const points = parseFloat(e.target.value);
            if (!isNaN(points) && points >= 0) {
                appState.gradeScale[grade] = points;
                calculateSGPA();
                calculateCGPA();
                saveLocalStorage();
            }
        });
    });
}

// SYNCHRONIZE SELECTIONS (YEAR & SEMESTER)
function syncYearAndSemester(source) {
    const yearSelect = document.getElementById("select-year");
    const semSelect = document.getElementById("select-semester");
    
    if (source === "year") {
        const year = parseInt(yearSelect.value);
        // Map Year to starting semester of that year
        const targetSem = (year - 1) * 2 + 1;
        semSelect.value = targetSem.toString();
        appState.selectedSem = targetSem.toString();
        appState.selectedYear = year.toString();
    } else if (source === "semester") {
        const sem = parseInt(semSelect.value);
        // Map Semester to Year
        const targetYear = Math.ceil(sem / 2);
        yearSelect.value = targetYear.toString();
        appState.selectedYear = targetYear.toString();
        appState.selectedSem = sem.toString();
    }
    
    // Update headers and reload default courses
    updateCurriculumHeaders();
    loadPresetCurriculum();
}

// UPDATE INTERFACE HEADER SUBTITLES BASED ON SELECTED FILTERS
function updateCurriculumHeaders() {
    const deptText = DEPT_INFO[appState.selectedDept]?.name || appState.selectedDept;
    const titleText = `Course Sheet: ${deptText}`;
    const subtitleText = `Manage subjects, credits, and grade values for Semester ${appState.selectedSem} (${appState.regulations})`;
    
    document.getElementById("calc-title").innerHTML = `
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
        ${titleText}
    `;
    document.getElementById("calc-subtitle").innerText = subtitleText;
}

// EXPORT PDF REPORT TRANSCRIPT
function exportPDF() {
    // Fill Print Info template fields
    const deptText = DEPT_INFO[appState.selectedDept]?.name || appState.selectedDept;
    document.getElementById("print-dept").innerText = deptText;
    document.getElementById("print-year").innerText = `${appState.selectedYear}st Year (Sem ${appState.selectedSem})`;
    document.getElementById("print-sem").innerText = `Semester ${appState.selectedSem}`;
    document.getElementById("print-date").innerText = new Date().toLocaleDateString("en-IN", {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
    
    const sgpaVal = document.getElementById("sgpa-val").innerText;
    document.getElementById("print-sgpa").innerText = sgpaVal;
    
    // Trigger native printing system
    window.print();
}

// RESET APPLICATION STATE TO DEFAULTS
function resetApp() {
    if (confirm("Are you sure you want to reset all calculations, saved semesters history, and custom configurations?")) {
        localStorage.removeItem("mkce_cgpa_tracker_state");
        appState = {
            selectedDept: "cse",
            selectedYear: "1",
            selectedSem: "1",
            courses: [],
            history: [],
            gradeScale: { ...DEFAULT_GRADE_SCALE },
            decimals: 2,
            theme: "light",
            regulations: "Regulations 2022"
        };
        
        // Reset Selector values
        document.getElementById("select-department").value = "cse";
        document.getElementById("select-year").value = "1";
        document.getElementById("select-semester").value = "1";
        document.getElementById("select-decimal-places").value = "2";
        document.getElementById("input-custom-regulations").value = "Regulations 2022";
        
        // Reload all modules
        applyTheme(appState.theme);
        updateCurriculumHeaders();
        loadPresetCurriculum();
        renderHistoryTimeline();
        calculateCGPA();
        renderSettingsTab();
        
        showToast("Application has been reset to defaults successfully.", "info");
    }
}

// THEME MANAGEMENT
function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    const toggle = document.getElementById("theme-toggle");
    const sun = toggle.querySelector(".sun-icon");
    const moon = toggle.querySelector(".moon-icon");
    
    if (theme === "light") {
        sun.style.display = "block";
        moon.style.display = "none";
    } else {
        sun.style.display = "none";
        moon.style.display = "block";
    }
    appState.theme = theme;
    saveLocalStorage();
}

// INITIAL APP ENTRYPOINT
document.addEventListener("DOMContentLoaded", () => {
    // 1. Load details from disk
    loadLocalStorage();
    
    // 2. Set active theme
    applyTheme(appState.theme);
    
    // 3. Set drop-down select values from state
    document.getElementById("select-department").value = appState.selectedDept;
    document.getElementById("select-year").value = appState.selectedYear;
    document.getElementById("select-semester").value = appState.selectedSem;
    document.getElementById("select-decimal-places").value = appState.decimals.toString();
    document.getElementById("input-custom-regulations").value = appState.regulations;
    
    // 4. Setup navigation tabs action listeners
    const tabs = {
        "tab-calc": "calc-card",
        "tab-history": "history-card",
        "tab-settings": "settings-card"
    };
    
    Object.keys(tabs).forEach(tabId => {
        const btn = document.getElementById(tabId);
        btn.addEventListener("click", () => {
            // Remove active classes
            Object.keys(tabs).forEach(id => {
                document.getElementById(id).classList.remove("active");
                document.getElementById(tabs[id]).classList.remove("active");
            });
            
            // Set active tab
            btn.classList.add("active");
            document.getElementById(tabs[tabId]).classList.add("active");
            
            // Handle specific tab animations/drawing
            if (tabId === "tab-history") {
                renderChart();
            }
        });
    });
    
    // 5. Setup sidebar drop-down select change listeners
    document.getElementById("select-department").addEventListener("change", (e) => {
        appState.selectedDept = e.target.value;
        updateCurriculumHeaders();
        loadPresetCurriculum();
    });
    
    document.getElementById("select-year").addEventListener("change", () => {
        syncYearAndSemester("year");
    });
    
    document.getElementById("select-semester").addEventListener("change", () => {
        syncYearAndSemester("semester");
    });
    
    // 6. Setup buttons action listeners
    document.getElementById("btn-add-row").addEventListener("click", addRow);
    document.getElementById("btn-clear-grades").addEventListener("click", () => {
        appState.courses.forEach(c => c.grade = "U");
        renderCourseTable();
        showToast("Cleared all course grades successfully.", "info");
    });
    document.getElementById("btn-load-preset").addEventListener("click", loadPresetCurriculum);
    document.getElementById("btn-save-semester").addEventListener("click", saveSemester);
    document.getElementById("btn-export-pdf").addEventListener("click", exportPDF);
    document.getElementById("btn-reset-app").addEventListener("click", resetApp);
    
    // Theme toggle click
    document.getElementById("theme-toggle").addEventListener("click", () => {
        const newTheme = appState.theme === "dark" ? "light" : "dark";
        applyTheme(newTheme);
    });
    
    // Decimal precision change
    document.getElementById("select-decimal-places").addEventListener("change", (e) => {
        appState.decimals = parseInt(e.target.value);
        calculateSGPA();
        calculateCGPA();
        renderSettingsTab();
        saveLocalStorage();
    });
    
    // Regulation text input change
    document.getElementById("input-custom-regulations").addEventListener("input", (e) => {
        appState.regulations = e.target.value;
        updateCurriculumHeaders();
        saveLocalStorage();
    });
    
    // 7. Load default courses if state is empty, else run renderer
    if (appState.courses.length === 0) {
        appState.courses = generatePreset(appState.selectedDept, appState.selectedSem);
    }
    
    updateCurriculumHeaders();
    renderCourseTable();
    renderHistoryTimeline();
    calculateCGPA();
    renderSettingsTab();
    
    setupOCRScanner();

    // Responsive chart draw on resize
    window.addEventListener("resize", () => {
        if (document.getElementById("tab-history").classList.contains("active")) {
            renderChart();
        }
    });
});

// ==========================================
// PADDLEOCR FRONTEND MODULE
// ==========================================
// Change this URL if you host the Python OCR backend on a public server (e.g. Render, Railway, HuggingFace Spaces)
const OCR_BACKEND_URL = "https://kavxarasu-cgpa-back-end.hf.space/ocr";

let ocrExtractedData = null; // Stores parsed results

function setupOCRScanner() {
    const modal = document.getElementById("ocr-modal");
    const btnOpen = document.getElementById("btn-ocr-scan");
    const btnClose = document.getElementById("btn-close-ocr-modal");
    const btnCancel = document.getElementById("btn-cancel-ocr");
    const btnImport = document.getElementById("btn-import-ocr");
    
    const dragDropZone = document.getElementById("ocr-drag-drop");
    const fileInput = document.getElementById("ocr-file-input");
    
    // Open Modal
    btnOpen.addEventListener("click", () => {
        resetOCRModal();
        modal.classList.add("active");
    });
    
    // Close Modal
    [btnClose, btnCancel].forEach(btn => {
        btn.addEventListener("click", () => {
            modal.classList.remove("active");
        });
    });
    
    // Close on overlay click
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
        }
    });
    
    // Drag & Drop
    dragDropZone.addEventListener("click", () => fileInput.click());
    
    dragDropZone.addEventListener("dragover", (e) => {
        e.preventDefault();
        dragDropZone.classList.add("dragover");
    });
    
    dragDropZone.addEventListener("dragleave", () => {
        dragDropZone.classList.remove("dragover");
    });
    
    dragDropZone.addEventListener("drop", (e) => {
        e.preventDefault();
        dragDropZone.classList.remove("dragover");
        if (e.dataTransfer.files.length > 0) {
            handleOCRFile(e.dataTransfer.files[0]);
        }
    });
    
    fileInput.addEventListener("change", (e) => {
        if (e.target.files.length > 0) {
            handleOCRFile(e.target.files[0]);
        }
    });
    
    // Select All Checkbox
    document.getElementById("ocr-select-all").addEventListener("change", (e) => {
        const checked = e.target.checked;
        document.querySelectorAll(".ocr-row-checkbox").forEach(cb => {
            cb.checked = checked;
        });
        toggleImportButtonState();
    });
    
    // Import Click
    btnImport.addEventListener("click", () => {
        if (!ocrExtractedData || !ocrExtractedData.courses) return;
        
        const selectedCourses = [];
        const checkboxes = document.querySelectorAll(".ocr-row-checkbox:checked");
        
        checkboxes.forEach(cb => {
            const index = parseInt(cb.dataset.index);
            const rawCourse = ocrExtractedData.courses[index];
            
            const row = cb.closest("tr");
            const code = row.querySelector(".ocr-input-code").value.trim().toUpperCase();
            const title = row.querySelector(".ocr-input-title").value.trim();
            const credits = parseFloat(row.querySelector(".ocr-input-credits").value) || 3;
            const grade = row.querySelector(".ocr-select-grade").value;
            
            selectedCourses.push({
                code: code || rawCourse.code,
                title: title || rawCourse.title,
                credits: credits,
                grade: grade
            });
        });
        
        if (selectedCourses.length === 0) {
            showToast("No courses selected for import!", "danger");
            return;
        }
        
        // Automatically update academic filters to match the scanned document on import
        if (ocrExtractedData.department) {
            appState.selectedDept = ocrExtractedData.department;
        }
        if (ocrExtractedData.semester) {
            appState.selectedSem = ocrExtractedData.semester.toString();
        }
        
        if (appState.courses.length > 0) {
            const targetDeptName = DEPT_INFO[appState.selectedDept]?.name || appState.selectedDept;
            if (!confirm(`This will import the scanned courses to ${targetDeptName} - Semester ${appState.selectedSem}. Continue?`)) {
                return;
            }
        }
        
        // Merge scanned courses with target curriculum presets to avoid excluding missing subjects
        const targetDept = appState.selectedDept;
        const targetSem = appState.selectedSem;
        const presets = generatePreset(targetDept, targetSem);
        const finalCourses = [];
        const mergedScannedIndices = new Set();
        
        if (presets && presets.length > 0) {
            presets.forEach(p => {
                const matchIndex = selectedCourses.findIndex((sc, scIdx) => {
                    if (mergedScannedIndices.has(scIdx)) return false;
                    const cleanScCode = sc.code.toUpperCase().replace(/^\d{2}/, "");
                    const cleanPCode = p.code.toUpperCase().replace(/^\d{2}/, "");
                    
                    if (cleanPCode === cleanScCode) return true;
                    
                    if (p.code.includes("/")) {
                        const codes = p.code.split("/").map(c => c.trim().toUpperCase().replace(/^\d{2}/, ""));
                        if (codes.includes(cleanScCode)) return true;
                    }
                    
                    if (p.code.includes("XX")) {
                        const prefix = p.code.split("XX")[0].toUpperCase().replace(/^\d{2}/, "");
                        if (cleanScCode.startsWith(prefix)) return true;
                    }
                    if (p.code.includes("XXXX")) {
                        const prefix = p.code.split("XXXX")[0].toUpperCase().replace(/^\d{2}/, "");
                        if (cleanScCode.startsWith(prefix)) return true;
                    }
                    
                    const cleanPTitle = p.title.toLowerCase().replace(/[^a-z0-9]/g, "");
                    const cleanScTitle = sc.title.toLowerCase().replace(/[^a-z0-9]/g, "");
                    if (cleanPTitle === cleanScTitle) return true;
                    
                    if (p.title.includes("/")) {
                        const titles = p.title.split("/").map(t => t.trim().toLowerCase().replace(/[^a-z0-9]/g, ""));
                        if (titles.includes(cleanScTitle)) return true;
                    }
                    
                    return false;
                });
                
                if (matchIndex >= 0) {
                    const sc = selectedCourses[matchIndex];
                    finalCourses.push({
                        code: sc.code,
                        title: sc.title,
                        credits: sc.credits,
                        grade: sc.grade
                    });
                    mergedScannedIndices.add(matchIndex);
                } else {
                    finalCourses.push({
                        code: p.code,
                        title: p.title,
                        credits: p.credits,
                        grade: "U" // Default to ungraded
                    });
                }
            });
            
            // Add custom scanned courses that didn't match presets
            selectedCourses.forEach((sc, scIdx) => {
                if (!mergedScannedIndices.has(scIdx)) {
                    finalCourses.push(sc);
                }
            });
        } else {
            finalCourses.push(...selectedCourses);
        }
        
        // Update state and selectors
        appState.courses = finalCourses;
        
        document.getElementById("select-department").value = appState.selectedDept;
        document.getElementById("select-semester").value = appState.selectedSem;
        
        const targetYear = Math.ceil(parseInt(appState.selectedSem) / 2);
        document.getElementById("select-year").value = targetYear.toString();
        appState.selectedYear = targetYear.toString();
        
        // Render & Update
        updateCurriculumHeaders();
        renderCourseTable();
        calculateSGPA();
        saveLocalStorage();
        
        showToast(`Successfully imported ${selectedCourses.length} courses (merged with preset)!`);
        modal.classList.remove("active");
    });
}

function resetOCRModal() {
    ocrExtractedData = null;
    document.getElementById("ocr-file-input").value = "";
    document.getElementById("ocr-step-upload").style.display = "block";
    document.getElementById("ocr-step-processing").style.display = "none";
    document.getElementById("ocr-step-results").style.display = "none";
    document.getElementById("btn-import-ocr").style.display = "none";
    document.getElementById("btn-import-ocr").disabled = true;
    document.getElementById("ocr-alerts-container").innerHTML = "";
}

// OCR STATUS INDICATOR AND ANIMATION HELPERS
function updateScannerStatus(state) {
    const pill = document.getElementById("ocr-status-pill");
    if (!pill) return;
    
    const dot = pill.querySelector(".status-dot");
    const text = pill.querySelector(".status-text");
    
    if (state === "ready") {
        dot.className = "status-dot dot-green";
        text.innerText = "Scanner Ready";
    } else if (state === "processing") {
        dot.className = "status-dot dot-yellow";
        text.innerText = "Processing Sheet";
    } else if (state === "error") {
        dot.className = "status-dot dot-red";
        text.innerText = "Error Processing";
    }
}

function startOCRProgressBarAnimation() {
    const statusMsg = document.getElementById("ocr-status-message");
    const progressFill = document.getElementById("ocr-progress-ring-fill");
    const progressPercentText = document.getElementById("ocr-progress-percent");
    
    const messages = [
        { progress: 15, text: "Uploading Grade Sheet..." },
        { progress: 35, text: "Analyzing Academic Record..." },
        { progress: 60, text: "Extracting Course Information..." },
        { progress: 85, text: "Calculating SGPA..." },
        { progress: 95, text: "Preparing Results..." }
    ];
    
    let currentStep = 0;
    const circumference = 2 * Math.PI * 50; // 314.16
    
    const setProgress = (percent) => {
        if (progressPercentText) progressPercentText.innerText = `${Math.round(percent)}%`;
        if (progressFill) {
            const offset = circumference - (percent / 100) * circumference;
            progressFill.style.strokeDashoffset = offset;
        }
    };
    
    setProgress(0);
    
    const intervalId = setInterval(() => {
        if (currentStep < messages.length) {
            setProgress(messages[currentStep].progress);
            if (statusMsg) statusMsg.innerText = messages[currentStep].text;
            currentStep++;
        }
    }, 1000);
    
    return {
        stop: (success = true) => {
            clearInterval(intervalId);
            if (success) {
                setProgress(100);
                if (statusMsg) statusMsg.innerText = "Preparing Results...";
            }
        }
    };
}

function handleOCRFile(file) {
    if (!file.type.match("image.*")) {
        showToast("Please upload a valid image file (PNG, JPG, JPEG).", "danger");
        return;
    }
    
    document.getElementById("ocr-step-upload").style.display = "none";
    document.getElementById("ocr-step-processing").style.display = "block";
    
    // Update status to processing (Yellow 🟡)
    updateScannerStatus("processing");
    
    // Start circular loader animation
    const loader = startOCRProgressBarAnimation();
    
    const engine = document.getElementById("select-ocr-engine") ? document.getElementById("select-ocr-engine").value : "ocrspace";
    
    const formData = new FormData();
    formData.append("image", file);
    formData.append("engine", engine);
    
    fetch(OCR_BACKEND_URL, {
        method: "POST",
        body: formData
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Server returned status ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        loader.stop(true);
        updateScannerStatus("ready"); // Status ready (Green 🟢)
        setTimeout(() => {
            displayOCRResults(data);
        }, 500);
    })
    .catch(error => {
        console.error("OCR API error: ", error);
        loader.stop(false);
        resetOCRModal();
        updateScannerStatus("error"); // Status error (Red 🔴)
        showToast("OCR processing failed. Make sure the local server is running.", "danger");
        showOCROfflineInstructions();
    });
}

function showOCROfflineInstructions() {
    const modal = document.getElementById("ocr-modal");
    modal.classList.add("active");
    
    const stepUpload = document.getElementById("ocr-step-upload");
    stepUpload.style.display = "block";
    
    let guide = document.getElementById("ocr-offline-guide");
    if (!guide) {
        guide = document.createElement("div");
        guide.id = "ocr-offline-guide";
        guide.className = "ocr-alert";
        guide.style.marginTop = "20px";
        guide.style.background = "rgba(239, 68, 68, 0.08)";
        guide.style.borderColor = "rgba(239, 68, 68, 0.2)";
        guide.innerHTML = `
            <div class="ocr-alert-icon" style="color: var(--accent-danger)">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
            </div>
            <div class="ocr-alert-content">
                <h5 style="color: var(--accent-danger)">Local OCR Server Offline</h5>
                <p>To use OCR scanning, you must run the local Python backend:</p>
                <code style="display: block; background: rgba(0,0,0,0.3); padding: 8px; border-radius: 6px; font-family: monospace; font-size: 0.8rem; margin: 8px 0; color: var(--text-primary); user-select: all;">python server.py</code>
                <p>If you haven't installed requirements yet, run:</p>
                <code style="display: block; background: rgba(0,0,0,0.3); padding: 8px; border-radius: 6px; font-family: monospace; font-size: 0.8rem; margin: 8px 0; color: var(--text-primary); user-select: all;">pip install paddlepaddle paddleocr flask flask-cors opencv-python-headless</code>
            </div>
        `;
        stepUpload.appendChild(guide);
    }
}

function displayOCRResults(data) {
    ocrExtractedData = data;
    
    const guide = document.getElementById("ocr-offline-guide");
    if (guide) guide.remove();
    
    document.getElementById("ocr-step-processing").style.display = "none";
    document.getElementById("ocr-step-results").style.display = "block";
    
    const btnImport = document.getElementById("btn-import-ocr");
    btnImport.style.display = "inline-flex";
    btnImport.disabled = false;
    
    const detectedDept = data.department;
    const detectedSem = data.semester ? data.semester.toString() : null;
    
    const deptInfo = DEPT_INFO[detectedDept];
    document.getElementById("ocr-det-dept").innerText = deptInfo ? deptInfo.name : (detectedDept || "Unknown");
    document.getElementById("ocr-det-sem").innerText = detectedSem ? `Semester ${detectedSem}` : "Unknown";
    document.getElementById("ocr-det-count").innerText = data.courses ? data.courses.length : 0;
    
    renderOCRResultsTable();
    checkOCRFilterMismatch(detectedDept, detectedSem);
}

function renderOCRResultsTable() {
    const tbody = document.getElementById("ocr-results-tbody");
    tbody.innerHTML = "";
    
    if (!ocrExtractedData || !ocrExtractedData.courses || ocrExtractedData.courses.length === 0) {
        tbody.innerHTML = `<tr><td colspan="6" style="text-align: center; color: var(--text-muted);">No courses extracted from image.</td></tr>`;
        return;
    }
    
    const targetDept = ocrExtractedData.department || appState.selectedDept;
    const targetSem = ocrExtractedData.semester ? ocrExtractedData.semester.toString() : appState.selectedSem;
    
    const presets = generatePreset(targetDept, targetSem);
    
    ocrExtractedData.courses.forEach((course, index) => {
        let matchedCredits = 3; 
        let isMatched = false;
        
        if (presets && presets.length > 0) {
            const match = presets.find(p => {
                const cleanScCode = course.code.toUpperCase().replace(/^\d{2}/, "");
                const cleanPCode = p.code.toUpperCase().replace(/^\d{2}/, "");
                
                if (cleanPCode === cleanScCode) return true;
                
                if (p.code.includes("/")) {
                    const codes = p.code.split("/").map(c => c.trim().toUpperCase().replace(/^\d{2}/, ""));
                    if (codes.includes(cleanScCode)) return true;
                }
                
                if (p.code.includes("XX")) {
                    const prefix = p.code.split("XX")[0].toUpperCase().replace(/^\d{2}/, "");
                    if (cleanScCode.startsWith(prefix)) return true;
                }
                if (p.code.includes("XXXX")) {
                    const prefix = p.code.split("XXXX")[0].toUpperCase().replace(/^\d{2}/, "");
                    if (cleanScCode.startsWith(prefix)) return true;
                }
                
                const cleanPresetTitle = p.title.toLowerCase().replace(/[^a-z0-9]/g, "");
                const cleanCourseTitle = course.title.toLowerCase().replace(/[^a-z0-9]/g, "");
                if (cleanPresetTitle === cleanCourseTitle) return true;
                
                if (p.title.includes("/")) {
                    const titles = p.title.split("/").map(t => t.trim().toLowerCase().replace(/[^a-z0-9]/g, ""));
                    if (titles.includes(cleanCourseTitle)) return true;
                }
                
                return false;
            });
            
            if (match) {
                matchedCredits = match.credits;
                isMatched = true;
            } else {
                const titleUpper = course.title.toUpperCase();
                if (titleUpper.includes("LABORATORY") || titleUpper.includes("PRACTICAL") || titleUpper.includes("WORKSHOP") || titleUpper.includes("LAB")) {
                    matchedCredits = 1.0;
                } else if (titleUpper.includes("PROJECT PHASE II") || titleUpper.includes("PROJECT WORK")) {
                    matchedCredits = (targetDept === "ai-ml") ? 16.0 : 8.0;
                } else if (titleUpper.includes("PROJECT")) {
                    matchedCredits = 2.0;
                }
            }
        }
        
        let gradeOptions = "";
        Object.keys(appState.gradeScale).forEach(gradeKey => {
            const selected = course.grade === gradeKey ? "selected" : "";
            gradeOptions += `<option value="${gradeKey}" ${selected}>${gradeKey}</option>`;
        });
        
        const tr = document.createElement("tr");
        if (isMatched) {
            tr.style.background = "rgba(16, 185, 129, 0.02)";
        }
        
        tr.innerHTML = `
            <td style="text-align: center; vertical-align: middle;">
                <input type="checkbox" class="ocr-row-checkbox" data-index="${index}" checked>
            </td>
            <td>
                <input type="text" class="table-input ocr-input-code" value="${course.code}" style="width: 100%; text-transform: uppercase;">
            </td>
            <td>
                <input type="text" class="table-input ocr-input-title" value="${course.title}" style="width: 100%;" title="${course.title}">
            </td>
            <td style="text-align: center; vertical-align: middle; color: var(--text-secondary); font-size: 0.85rem;">
                ${course.semester || targetSem}
            </td>
            <td>
                <div class="select-wrapper">
                    <select class="custom-select ocr-select-grade" style="padding: 4px 24px 4px 8px; font-size: 0.8rem; border-radius: 6px;">
                        ${gradeOptions}
                    </select>
                </div>
            </td>
            <td>
                <input type="number" step="0.5" class="table-input ocr-input-credits" value="${matchedCredits}" style="width: 60px; text-align: center;" title="${isMatched ? 'Linked automatically from presets' : 'Estimated credits'}">
                ${isMatched ? '<span style="color: var(--accent-success); font-size: 0.7rem; display: block; text-align: center; margin-top: 2px;">Linked</span>' : ''}
            </td>
        `;
        
        tbody.appendChild(tr);
    });
    
    tbody.querySelectorAll(".ocr-row-checkbox").forEach(cb => {
        cb.addEventListener("change", toggleImportButtonState);
    });
    toggleImportButtonState();
}

function toggleImportButtonState() {
    const checkedCount = document.querySelectorAll(".ocr-row-checkbox:checked").length;
    const btnImport = document.getElementById("btn-import-ocr");
    btnImport.disabled = checkedCount === 0;
    btnImport.innerText = `Import Selected Courses (${checkedCount})`;
}

function checkOCRFilterMismatch(detectedDept, detectedSem) {
    const alertsContainer = document.getElementById("ocr-alerts-container");
    alertsContainer.innerHTML = "";
    
    const deptMismatch = detectedDept && detectedDept !== appState.selectedDept;
    const semMismatch = detectedSem && detectedSem !== appState.selectedSem;
    
    if (deptMismatch || semMismatch) {
        const activeDeptName = DEPT_INFO[appState.selectedDept]?.name || appState.selectedDept;
        const detDeptName = DEPT_INFO[detectedDept]?.name || detectedDept;
        
        let msg = "The scanned grade sheet details do not match your current selection filter.";
        if (deptMismatch && semMismatch) {
            msg = `Detected grade sheet belongs to <strong>${detDeptName} (Semester ${detectedSem})</strong>, but your active sheet is set to <strong>${activeDeptName} (Semester ${appState.selectedSem})</strong>.`;
        } else if (deptMismatch) {
            msg = `Detected department is <strong>${detDeptName}</strong>, but your active sheet is set to <strong>${activeDeptName}</strong>.`;
        } else if (semMismatch) {
            msg = `Detected semester is <strong>Semester ${detectedSem}</strong>, but your active sheet is set to <strong>Semester ${appState.selectedSem}</strong>.`;
        }
        
        const alertDiv = document.createElement("div");
        alertDiv.className = "ocr-alert";
        alertDiv.innerHTML = `
            <div class="ocr-alert-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
                    <line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
            </div>
            <div class="ocr-alert-content">
                <h5>Academic Filter Mismatch</h5>
                <p>${msg}</p>
                <button class="ocr-alert-action-btn" id="ocr-alert-switch-btn">Switch Filters to Match</button>
            </div>
        `;
        
        alertsContainer.appendChild(alertDiv);
        
        document.getElementById("ocr-alert-switch-btn").addEventListener("click", () => {
            if (detectedDept) appState.selectedDept = detectedDept;
            if (detectedSem) appState.selectedSem = detectedSem;
            
            renderOCRResultsTable();
            showToast("Switched selectors to match scanned document.");
            alertsContainer.innerHTML = "";
        });
    }
}
