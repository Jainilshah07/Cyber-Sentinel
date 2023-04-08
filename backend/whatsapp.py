import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])
path = '/chromedriver'
driver = webdriver.Chrome(path, options=options)
try:
    driver.get('https://web.whatsapp.com/')
    time.sleep(15)
    wait = WebDriverWait(driver, 10)


except:
    print("An error occurred")
