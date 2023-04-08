from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

options = webdriver.ChromeOptions()
options.add_experimental_option('excludeSwitches', ['enable-logging'])

path = '/chromedriver'
driver = webdriver.Chrome(path, options=options)
wait = WebDriverWait(driver, 10)

driver.get('https://www.instagram.com/accounts/emailsignup/')

elem = wait.until(EC.visibility_of_element_located(
    (By.XPATH, '/html/body/div[2]/div/div/div[1]/div/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[3]/div/label/input')))
elem.send_keys('jashshah3005@gmail.comm')

elem1 = wait.until(EC.visibility_of_element_located(
    (By.XPATH, '/html/body/div[2]/div/div/div[1]/div/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[4]/div/label/input')))
elem1.send_keys('')

try:
    x1nxxyus_element = wait.until(
        EC.visibility_of_element_located((By.CLASS_NAME, 'x1nxxyus')))
    print("Not Registered")
except:
    print("Registered")

finally:
    driver.quit()
