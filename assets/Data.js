/* ===== EDIT YOUR CONTENT HERE =====
   Skills: [id, name, category]. Projects list skill ids in `tech`; the network edges are built from that.
   Milestones: `skills`/`projects` are the nodes that light up when the visitor scrolls to that step. */
const GH = "https://github.com/moaaz311/";
const RAW = "https://raw.githubusercontent.com/moaaz311/";
window.DATA = {
    cats: { bi: "BI & Visualization", model: "Data Modeling", db: "Databases & SQL", eng: "Data Engineering", cloud: "Cloud & Platforms", auto: "Automation", ml: "Machine Learning", dev: "Dev Tools" },
    skills: [
        ["powerbi", "Power BI", "bi"], ["dax", "DAX", "bi"], ["pq", "Power Query/M", "bi"], ["paginated", "Paginated Reports", "bi"], ["ssrs", "SSRS", "bi"], ["tableau", "Tableau", "bi"], ["dataviz", "Data Visualization", "bi"], ["kpi", "KPI Reporting", "bi"],
        ["star", "Star Schema", "model"], ["dimmod", "Dimensional Modeling", "model"], ["dw", "Data Warehousing", "model"], ["olap", "OLAP Cubes", "model"],
        ["sqlserver", "SQL Server", "db"], ["tsql", "T-SQL", "db"], ["sproc", "Stored Procedures", "db"], ["dbdesign", "Database Design", "db"],
        ["etl", "ETL/ELT", "eng"], ["ssis", "SSIS", "eng"], ["ssas", "SSAS", "eng"], ["python", "Python", "eng"], ["pandas", "Pandas", "eng"], ["numpy", "NumPy", "eng"], ["rest", "REST APIs", "eng"], ["excel", "Excel", "eng"], ["dbt", "dbt", "eng"], ["dq", "Data Quality Testing", "eng"],
        ["fabric", "Microsoft Fabric", "cloud"], ["azure", "Azure", "cloud"], ["pbis", "Power BI Service", "cloud"],
        ["pa", "Power Automate", "auto"], ["sp", "SharePoint Lists", "auto"], ["pbirest", "Power BI REST API", "auto"], ["http", "HTTP Triggers", "auto"], ["json", "JSON", "auto"], ["onedrive", "OneDrive", "auto"], ["outlook", "Outlook", "auto"],
        ["xgb", "XGBoost", "ml"], ["sklearn", "scikit-learn", "ml"],
        ["git", "Git", "dev"], ["github", "GitHub", "dev"], ["streamlit", "Streamlit", "dev"], ["flask", "Flask", "dev"], ["html", "HTML/CSS", "dev"]
    ],
    projects: [
        {
            id: "econ", name: "Egypt EconLens", feat: true, img: RAW + "FinalProjectAPP/main/EgyptEconLens.png",
            summary: "Economic intelligence and supply chain analytics platform with an AI Copilot, embedded Power BI and paginated (RDL) reports, and Power Automate alerts.",
            nums: [["3", "source systems"], ["2019–2025", "data covered"], ["4", "AI Copilot chart types"]],
            pts: ["Unified trade, macroeconomic and supply-chain data from 3 source systems on Azure, using a SQL Server star schema, SSIS ETL and a mobile-first Flask app.", "Replaced manual SQL querying with a natural-language AI Copilot built from a prompt builder, schema retriever and SQL validator.", "Served Power BI dashboards and RDL reports to public visitors with no Power BI Embedded purchase, via Microsoft Fabric, the Power BI REST API and Azure AD guest access.", "Automated PDF export and OneDrive share links for 2 report types, and a scheduled workflow that emails subscribers when a report changes."],
            tech: ["python", "flask", "sqlserver", "ssis", "powerbi", "fabric", "azure", "pa", "sp", "rest"], live: "https://final-project-app-nine.vercel.app/", repo: GH + "FinalProjectAPP"
        },
        {
            id: "laliga", name: "LaLiga Match Intelligence & Analytics", feat: true,
            summary: "Python ETL pipeline, SQL Server star schema and a 5-page Power BI dashboard covering a full La Liga season.",
            nums: [["380", "fixtures"], ["20", "clubs"], ["770+", "player records"], ["2 + 5", "dimension + fact tables"]],
            pts: ["Consolidated fixtures, club profiles (xG, possession, Elo) and player records across 10 statistical categories, with REST API pagination, rate limiting and JSON caching.", "Resolved 223 player headshots (76% of 294) from 2 sources with Unicode name matching and 12-thread checks, with an SVG fallback.", "Designed a star schema with keys and indexes, batch-loaded via SQLAlchemy and pyodbc."],
            tech: ["python", "pandas", "sqlserver", "tsql", "powerbi", "dax", "rest", "html", "star"], repo: GH + "LaLiga-Match-Intelligence-Analytics"
        },
        {
            id: "madrid", name: "Real Madrid 2025–2026 Analysis", img: RAW + "Real-Madrid-Analysis-Season-2025-2026-LA-Liga/main/p1.png",
            summary: "Tableau dashboard on scoring efficiency, shot accuracy and discipline across home and away fixtures, showing which opponents are most vulnerable.",
            nums: [], tech: ["tableau"], repo: GH + "Real-Madrid-Analysis-Season-2025-2026-LA-Liga"
        },
        {
            id: "churn", name: "Bank Customer Churn Prediction", img: RAW + "churn_prediction_app/main/1(1).png",
            summary: "XGBoost churn model with a Streamlit app for real-time scoring by business users.",
            nums: [["10,127", "customers"], ["96.8%", "accuracy"], ["0.99", "ROC-AUC"]], tech: ["python", "xgb", "sklearn", "streamlit"], repo: GH + "churn_prediction_app"
        },
        {
            id: "flight", name: "Flight Delay Analysis Dashboard", img: RAW + "Flight_Data_Analysis_Project_PowerBI_Dashboard/main/1(1).png",
            summary: "Power BI dashboard that surfaces the airlines, airports and periods with the highest delays and cancellations.",
            nums: [], tech: ["powerbi", "pq", "star"], repo: GH + "Flight_Data_Analysis_Project_PowerBI_Dashboard"
        },
        {
            id: "sales", name: "Business Sales Overview Dashboard", img: RAW + "Business-Sales-Overview-Dashboard-Power-BI-/main/p1.png",
            summary: "One view of customers, orders, revenue, tax, shipping cost and net sales, with slicers by product, region and time.",
            nums: [["6", "KPIs"], ["1 + 5", "fact + dimension tables"]], tech: ["powerbi", "dax", "pq", "star"], repo: GH + "Business-Sales-Overview-Dashboard-Power-BI-"
        },
        {
            id: "ssascubes", name: "SSAS Sales Analysis Cubes",
            summary: "Multidimensional sales analysis by product, customer, channel, salesman and time, with a Year/Quarter hierarchy.",
            nums: [["3", "OLAP cubes"], ["5", "dimensions"]], tech: ["sqlserver", "ssas", "olap", "star"], repo: GH + "SSAS_Sales_Analysis__Projects"
        },
        {
            id: "ukbank", name: "UK Bank Customers Segmentation", img: RAW + "UK-Bank-Customers-Segmentation-Dashboard-Tableau-/main/p1.png",
            summary: "Tableau dashboard where a region map filters every chart, with dynamic age and balance bins and a job-classification treemap.",
            nums: [], tech: ["tableau"], repo: GH + "UK-Bank-Customers-Segmentation-Dashboard-Tableau-"
        }
    ],
    milestones: [
        { year: "2021", title: "Started my B.Sc.", text: "Began a B.Sc. in Computer and Artificial Intelligence at Banha University, specializing in Information Security & Digital Forensics.", skills: ["python", "html"], projects: [] },
        { year: "2025", title: "Graduated", text: "Finished the degree in July 2025 (Faculty of Computers and AI, Banha University).", skills: [], projects: [] },
        {
            year: "Jan – May 2026", title: "ITI Intensive Training Program", text: "480 hours as a Power BI Developer intern at the Information Technology Institute, Menoufia Branch: Python, advanced SQL, data warehousing, ETL, dbt, the Microsoft BI stack, Power BI, Fabric, Tableau and generative AI.",
            skills: ["python", "pandas", "numpy", "sqlserver", "tsql", "sproc", "dbdesign", "dw", "dimmod", "star", "etl", "ssis", "ssas", "ssrs", "dbt", "dq", "powerbi", "dax", "pq", "tableau", "fabric", "git", "github", "excel", "dataviz", "kpi", "olap"], projects: ["sales", "flight", "ssascubes", "churn"]
        },
        {
            year: "2026", title: "Built real projects", text: "Delivered Egypt EconLens (the 60-hour graduation project), LaLiga Intelligence and a portfolio of dashboards.",
            skills: ["rest", "flask", "streamlit", "azure", "pbis", "pa", "sp", "pbirest", "http", "json", "onedrive", "outlook", "paginated", "html", "xgb", "sklearn"], projects: ["econ", "laliga", "madrid", "ukbank"]
        },
        { year: "Today", title: "Open to work", text: "Looking for on-site opportunities in Cairo, and willing to relocate across Egypt.", all: true }
    ]
};