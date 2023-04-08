from selenium import webdriver
from selenium.webdriver.common.by import By

import time
options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])

path = '/chromedriver'
driver = webdriver.Chrome(path, options=options)
driver.get('https://www.instagram.com/accounts/emailsignup/')
time.sleep(5)
elem = driver.find_element(
    By.XPATH, '/html/body/div[2]/div/div/div[1]/div/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[3]/div/label/input')
time.sleep(5)
elem.send_keys('jashshah3005@gmail.comm')
elem1 = driver.find_element(
    By.XPATH, '/html/body/div[2]/div/div/div[1]/div/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[4]/div/label/input')
time.sleep(3)
elem1.send_keys('')
time.sleep(5)
if driver.find_element(By.CLASS_NAME, "x1nxxyus") != None:
    print("Not Registered")
else:
    print("Registered")

time.sleep(25)
