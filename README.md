# Cyber Sentinel – Cross-Platform Registration Verification  

**Cyber Sentinel** is a cross-platform registration verification system that enhances cybersecurity by checking whether a given **email ID** or **phone number** is already registered on popular platforms (e.g., Instagram, WhatsApp, Truecaller, Office365).  

---

## 🔑 Key Features  
- ✅ Verify if an **email ID** or **phone number** is registered on multiple online platforms  
- 🌐 Cross-platform checks (Instagram, WhatsApp, Truecaller, Office365, etc.)  
- ⚡ Built with a **Flask backend** and **React frontend**  
- 🤖 Automated verification using **Selenium WebDriver**  
- 🔒 Useful for cybersecurity, digital forensics, and identity footprint analysis  

---

## 🛠️ Tech Stack  
**Frontend:** React.js, Tailwind CSS  
**Backend:** Flask (Python)  
**Automation:** Selenium WebDriver   

---

## 🚀 How It Works  
1. User enters **email/phone number** in the frontend  
2. React frontend sends a request to Flask API (`/api/instagram`, `/api/whatsapp`, etc.)  
3. Flask calls the respective **Selenium script**  
4. Script checks registration status on the platform  
5. Result (`Registered` / `Not Registered`) is displayed  

---

## 📸 Example Use Case  
- **Email:** `test@gmail.com` → *Instagram: Registered, WhatsApp: Not Registered*  
- **Phone:** `+91XXXXXXXXXX` → *WhatsApp: Registered, Truecaller: Registered*  

---

## ⚡ Getting Started  

### Backend  
```bash
cd backend
pip install -r requirements.txt
python app.py
