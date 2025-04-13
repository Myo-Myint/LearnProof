# 🧠 LearnProof — AI-Guided, Solana-Powered Proof of Learning

LearnProof is an open learning platform that transforms real course completions into on-chain, verifiable credentials using Solana.

Built for the Encode x Solana Hackathon, our platform blends trusted educational content from **Microsoft Learn**, personalized AI tutoring, and Solana smart contracts to issue **NFT-backed learning certificates**.

---

## 🚀 What We’ve Built

- 🔍 **Course Explorer**: Integrated Microsoft Learn Catalog API to explore real technical modules
- 📘 **Unit Viewer**: Step-by-step microlearning UI to simulate progress
- ✅ **Progress Tracking**: Users can mark units complete and reach milestones
- 🔐 **Milestone Hashing (only as mvp)**: When a course is completed, a unique hash is generated and stored
- 📜 **Certificate Generation** *(WIP) (only as mvp)*: Based on milestone hash, a certificate will be generated and uploaded to IPFS
- 🪙 **NFT Minting** *(WIP) (only as mvp)*: A compressed NFT is minted on Solana referencing the IPFS cert
- 🤖 **AI Agent Integration** *(In progress)*: Using Solana AI Agent Kit to recommend next quests

---

## 🧩 Tech Stack

| Layer             | Technology |
|------------------|------------|
| Frontend         | Next.js (App Router), Tailwind CSS |
| API & Logic      | TypeScript, OpenAI (GPT for quiz gen) |
| Blockchain       | Solana, Anchor, Compressed NFTs |
| Storage          | IPFS via Web3.Storage |
| AI Agent         | Solana AI Agent Kit (Quest Recommender) |

---

## 🏆 Bounty Eligibility

This project uses core sponsor technology:
- **Solana** (smart contracts, NFTs, PDAs)
- **Solana AI Agent Kit** (course recommender based on learning history) (in progress)
- **IPFS** (certificate storage) (inprogress)

Qualifies for:
- ✅ AI x Blockchain
- ✅ Consumer App
- ✅ NFT Infrastructure

---

## ✨ Live Features

- `/courses`: Microsoft Learn module explorer
- `/courses/:id`: Course detail & summary view
- `/courses/:id/units/:unitId`: Mock unit content viewer with progress tracker
- Milestone hash generation from course progress (ready for on-chain write)

---

## 🛠 Coming Next

- ✅ NFT mint endpoint with Anchor
- ✅ Certificate PDF generation + IPFS upload
- ✅ Token reward system (LearnXP)
- ✅ AgentKit integration for personalized learning quests

---

## 🤝 Team

Built by Myo Myint Thu and Iyad and Damy at Encode AI London Hackathon.

---

