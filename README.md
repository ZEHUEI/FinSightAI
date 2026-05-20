# 📊 FinSight AI — Intelligent Portfolio & News Sentiment Engine

FinSight AI is an AI-powered financial analytics platform that analyzes stock portfolios using real-time news sentiment and generates automated risk insights. It combines full-stack development, NLP/LLM models, and cloud deployment to simulate a production-grade financial intelligence system.

---

## 🚀 Features

### 📁 Portfolio Dashboard
- Add stock tickers or mock assets
- View portfolio overview in a clean, responsive UI
- Track sentiment per asset in real time

### 🧠 AI Sentiment Analysis
- Fetches latest financial news for each ticker
- Uses NLP models (e.g. FinBERT / Hugging Face Transformers)
- Generates sentiment scores (positive / neutral / negative)

### ⚠️ Risk Insight Engine
- AI-generated explanations of portfolio risk
- Summarises why assets may be affected based on news
- Produces structured JSON risk reports

### 📈 Analytics Dashboard
- Sentiment trends over time
- Portfolio-level risk scoring
- Cached historical news analysis for performance efficiency

---

## 🏗️ Tech Stack

### Frontend
- React.js
- Material UI (MUI)
- Responsive dashboard design
- Charts / tables for analytics

### Backend
- Python
- FastAPI
- Background workers for news scraping & AI processing

### Database
- MongoDB
- PyMongo / Beanie ODM
- Stores:
  - Portfolio data
  - News cache
  - Sentiment history
  - Risk reports

### AI Layer
- Hugging Face Transformers (FinBERT or similar financial NLP model)
- Optional LLM API for summarisation
- Structured JSON outputs for frontend integration

---

## 🏗️ System Architecture
React Frontend
↓
FastAPI Backend
↓
MongoDB Database
↓
AI Sentiment Worker
↓
Financial News Sources / APIs

---


---

## 🔄 Workflow

1. User inputs stock tickers into portfolio
2. Backend fetches recent financial news per ticker
3. AI model performs sentiment analysis on headlines
4. Sentiment scores are aggregated per stock
5. LLM generates portfolio risk explanation
6. Dashboard displays insights and alerts

---

## ☁️ Deployment (Optional Bonus)

### Frontend Hosting
- AWS S3 static hosting
- CloudFront CDN for fast delivery

### Backend
- Dockerized FastAPI service
- Deployable to AWS ECS / EC2

### Infrastructure as Code
- Terraform used to provision:
  - S3 bucket
  - CloudFront distribution
