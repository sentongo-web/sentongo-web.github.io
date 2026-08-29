# Paul Sentongo — Clinical AI, Data Engineering & MLOps Portfolio

[![Portfolio](https://img.shields.io/badge/Portfolio-Live-2563eb)](https://sentongo-web.github.io/)
[![GitHub](https://img.shields.io/badge/GitHub-sentongo--web-181717?logo=github)](https://github.com/sentongo-web)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Paul%20Sentongo-0a66c2?logo=linkedin)](https://www.linkedin.com/in/paul-sentongo-885041284/)

I am a data scientist and applied AI researcher focused on building systems that move beyond notebooks: reliable data pipelines, reproducible machine-learning workflows, interpretable models, and deployable decision-support tools. My work is especially interested in clinical AI and practical technology for resource-constrained settings.

**Live portfolio:** [sentongo-web.github.io](https://sentongo-web.github.io/)

**Research portfolio:** [sentongo-web.github.io/research-portfolio.html](https://sentongo-web.github.io/research-portfolio.html)

## Featured Projects

### 1. SQL Server Data Warehouse

**Problem:** CRM and ERP exports used different identifiers, codes, formats, and data-quality rules. The disconnected raw files could not support reliable reporting without extensive reconciliation.

**What I built:**

- A complete SQL Server warehouse using the Bronze, Silver, and Gold medallion architecture.
- Raw ingestion from six source CSV files with `BULK INSERT`, preserving an auditable source layer.
- Transactional Silver-layer processing for cleansing, deduplication, safe date parsing, code standardisation, and recalculation of inconsistent sales values.
- A business-ready star schema with `fact_sales`, `dim_customers`, and `dim_products` at order-line grain.
- Data-quality and referential-integrity tests plus customer and product reporting views.
- SQL analytics for trends, rankings, segmentation, cumulative performance, year-over-year changes, recency, and lifetime value.

**Problem solved:** The project converts fragmented operational exports into a tested, documented source of truth that analysts can query without understanding the inconsistencies in the original systems.

**Stack:** SQL Server, T-SQL, SSMS, dimensional modelling, ETL, data-quality testing, Git/GitHub.

[Repository](https://github.com/sentongo-web/SQL_datawarehouse_Project) · [Project site](https://sentongo-web.github.io/SQL_datawarehouse_Project/)

---

### 2. Nakaseke Hypertension Risk Research & MLOps System

**Problem:** Community health records from Nakaseke Hospital contain structural missingness and demographic imbalance. In the 3,471-patient cohort, age is missing for 49.3% of records. A model assessed only with an aggregate accuracy score could silently fail important patient groups.

**What I built:**

- A leakage-safe clinical machine-learning pipeline with MICE and MissForest-style multivariate imputation.
- A model benchmark and class-balanced Random Forest screening model.
- A fairness audit across sex and age groups using Demographic Parity Difference, Disparate Impact Ratio, Equal Opportunity Difference, subgroup recall, and calibration error.
- SHAP explanations and second-order SHAP interaction analysis to examine both individual features and learned feature relationships.
- Reproducible training and research entry points, configuration-driven experiments, MLflow tracking, Docker packaging, and a web screening interface.

**What the analysis revealed:**

- Held-out AUROC: **0.649** on 695 test patients.
- Male recall was **14.0%**, compared with **36.2%** for female patients.
- Disparate Impact Ratio by sex was **0.397**.
- Recall for hypertensive patients under 30 was **0%** at the evaluated threshold.

**Problem solved:** The work does more than produce a risk score—it exposes where the model is unsafe. The audit identifies threshold recalibration, subgroup-specific validation, and better data collection as requirements before unsupervised clinical use.

**Stack:** Python, scikit-learn, imbalanced-learn, SHAP, Optuna, MLflow, Docker, Render.

[Repository](https://github.com/sentongo-web/Hypertension-Detection-Complete-MLOPs) · [Screening application](https://nakaseke-hypertension-screener.onrender.com/)

> This is a research screening system, not a diagnostic medical device. Its documented subgroup limitations are conditions on deployment, not minor disclaimers.

---

### 3. Dental OPG X-ray Analysis

**Problem:** Panoramic dental X-rays require specialist interpretation, creating delays where dental expertise is scarce.

**What I built:**

- A YOLOv8s object-detection system covering six categories: badly decayed crown/root, caries, fractured teeth, healthy teeth, impacted teeth, and infection.
- Image validation that rejects unsuitable uploads using aspect ratio, grayscale, brightness, and minimum-size checks.
- Colour-coded detections, plain-language findings, recommended actions, and downloadable PDF reports.
- A five-stage DVC pipeline for ingestion, validation, transformation, training, and evaluation, with MLflow experiment tracking.
- A Gradio interface designed for clinicians, trainees, outreach teams, and researchers.

**Problem solved:** The system turns an uploaded OPG image into localised, reviewable findings instead of a single opaque classification, while rejecting invalid inputs before inference.

**Stack:** Python, YOLOv8, Gradio, DVC, MLflow, OpenCV, pytest.

[Repository](https://github.com/sentongo-web/Dental-OPG-XRAY-Analysis-MLOPS)

---

### 4. KidneyDL CT Scan Classifier

**Problem:** Kidney tumours can be missed or reviewed late when radiology capacity is constrained. A useful support tool must include reproducible training and reliable serving—not only a model notebook.

**What I built:**

- A VGG16 transfer-learning classifier for Normal versus Tumour kidney CT scans.
- A four-stage, configuration-driven DVC pipeline covering ingestion, model preparation, training, and evaluation.
- MLflow and DagsHub experiment tracking, model registration, Docker packaging, Flask serving, and GitHub Actions deployment.
- A browser interface for uploading scans and receiving predictions.

**Result:** The documented model run achieved **89.9% validation accuracy**. This is a project validation result, not evidence of clinical approval or population-level generalisation.

**Problem solved:** The project demonstrates how to turn a medical-imaging experiment into a traceable, versioned, containerised, and continuously deployable ML system.

**Stack:** Python, TensorFlow/Keras, VGG16, DVC, MLflow, DagsHub, Flask, Docker, GitHub Actions, Hugging Face Spaces.

[Repository](https://github.com/sentongo-web/Kidney_classification_Using_MLOPS_and_DVC_Data-version-control) · [Live demo](https://huggingface.co/spaces/Sentoz/kidney-classifier)

## More Projects

| Project | Problem area | Main focus |
| --- | --- | --- |
| [Customer Behavior Analytics](https://github.com/sentongo-web/Customer-Behavior-Analytics-SQL-Python) | Understanding customer behaviour from transactional data | End-to-end SQL and Python analytics |
| [Breast Cancer Classification](https://github.com/sentongo-web/Breast-Cancer-Classification) | Supporting consistent diagnostic classification | Supervised learning and model evaluation |
| [Credit Card Fraud Detection](https://github.com/sentongo-web/Credit-Card-Fraud-Detection) | Finding rare fraudulent transactions without overwhelming legitimate users | Imbalanced classification and anomaly detection |
| [Crop Disease Classifier](https://github.com/sentongo-web/Crop-Disease-Classifier-CV) | Expanding access to early crop-disease identification | Computer vision for agriculture |
| [Heart Disease Prediction](https://github.com/sentongo-web/Heart-Disease-prediction) | Early cardiovascular risk stratification | Clinical tabular machine learning |
| [Data Engineering with DLT](https://github.com/sentongo-web/Data-Engineering-with-DLT-Full-Pipeline-APIs-Extraction) | Reproducible ingestion of API data | Data extraction and pipeline engineering |

Browse the complete collection on my [GitHub profile](https://github.com/sentongo-web?tab=repositories).

## Capabilities Demonstrated

| Area | Tools and practices |
| --- | --- |
| Data engineering | SQL Server, T-SQL, ETL/ELT, medallion architecture, dimensional modelling, data-quality testing |
| Machine learning | scikit-learn, TensorFlow, Keras, ensemble methods, imbalanced learning, calibration |
| Medical imaging | YOLOv8, VGG16, transfer learning, image validation, clinical reporting |
| Responsible AI | subgroup evaluation, fairness metrics, SHAP, interaction analysis, explicit deployment limitations |
| MLOps | DVC, MLflow, DagsHub, Docker, GitHub Actions, configuration-driven pipelines, model registries |
| Deployment | Flask, Gradio, Render, Hugging Face Spaces, GitHub Pages |

## Portfolio Repository

This repository contains the static portfolio website:

```text
sentongo-web.github.io/
├── index.html                 Landing page
├── research-portfolio.html    Detailed research and project portfolio
├── assets/                    CV and site assets
└── README.md                  Project overview
```

The site uses vanilla HTML, CSS, and JavaScript and is deployed through GitHub Pages.

## Local Preview

Clone the repository and open `index.html`, or serve the directory locally:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Contact

- Email: [sentongo.paul@outlook.com](mailto:sentongo.paul@outlook.com)
- LinkedIn: [linkedin.com/in/paul-sentongo-885041284](https://www.linkedin.com/in/paul-sentongo-885041284/)
- GitHub: [github.com/sentongo-web](https://github.com/sentongo-web)

## License

Individual project repositories contain their own licensing and data-use terms. Clinical datasets are not redistributed unless their repository explicitly states that sharing is permitted.
