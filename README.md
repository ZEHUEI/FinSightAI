📊 FinSight AI — Intelligent Portfolio & News Sentiment Engine

FinSight AI is an AI-powered financial analytics platform that helps users monitor stock portfolios, analyze market sentiment from real-time financial news, and receive automated risk insights. It combines modern full-stack engineering with NLP/LLM-based intelligence to simulate institutional-grade portfolio awareness.

🚀 Key Features
📁 Portfolio Dashboard
Add and manage a list of stock tickers or mock assets
View structured portfolio overview
Responsive UI for desktop and mobile
🧠 AI Market Sentiment Engine
Python-based background worker fetches recent financial news headlines
Uses NLP models (e.g., FinBERT or LLM APIs) to generate sentiment scores
Aggregates sentiment per stock/ticker
⚠️ Risk Alert System
AI-generated explanations of portfolio risk exposure
Summarises negative/positive news impact
Provides actionable insights in natural language
📈 Insightful Analytics
Sentiment trends over time
Portfolio-level risk scoring
Cached historical news sentiment for performance optimisation
🏗️ Tech Stack
Frontend
React.js
Material UI (MUI)
Responsive design (mobile-first dashboard layout)
Data visualisation (charts / tables / cards)
Backend
Python
FastAPI (REST API layer)
Background workers for news scraping & AI processing
Database
MongoDB
PyMongo / Beanie ODM
Stores:
Portfolio data
Cached news articles
Sentiment history
Risk reports
AI / NLP Layer
Hugging Face Transformers (FinBERT or similar financial model)
Optional LLM API integration (for summarisation & risk explanation)
Structured JSON output generation for downstream frontend use
