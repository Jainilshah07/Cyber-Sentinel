from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# Replace the following URL with the URL of the WhatsApp Web page
url = "https://web.whatsapp.com/"

# Replace the following string with the name of the chat you want to locate
chat_name = "Rahul Kapadia"

# Set up the Selenium driver
chrome_options = Options()
# Run Chrome in headless mode (no GUI)
chrome_options.add_argument("--headless")
# Replace with the path to your chromedriver executable
driver_service = Service("path/to/chromedriver")
driver = webdriver.Chrome(service=driver_service, options=chrome_options)

# Load the WhatsApp Web page and wait for it to load completely
driver.get(url)
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "_2eK7W")))

# Locate the chat with the specified name and click on it
chat_xpath = f"//span[@title='{chat_name}']"
chat_element = driver.find_element(By.XPATH, chat_xpath)
chat_element.click()

# Wait for the chat to load completely
WebDriverWait(driver, 10).until(
    EC.presence_of_element_located((By.CLASS_NAME, "OUeyt")))

# Do whatever you want with the chat (send messages, scrape data, etc.)

# Quit the driver
driver.quit()
