from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

options = webdriver.ChromeOptions()
# options.add_argument("--start-maximized")
# options.add_argument("--headless")
# options.add_argument("--window-size=0,0")
options.add_experimental_option('excludeSwitches', ['enable-logging'])
path = '/chromedriver'
service = webdriver.chrome.service.Service(path)
driver = webdriver.Chrome(service=service, options=options)


def get_details_instagram(email):
    driver.get('https://www.instagram.com/accounts/emailsignup/')
    wait = WebDriverWait(driver, 10)
    elem = wait.until(EC.presence_of_element_located(
        (By.XPATH, '/html/body/div[2]/div/div/div[1]/div/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[3]/div/label/input')))
    elem.send_keys(email)
    elem1 = wait.until(EC.presence_of_element_located(
        (By.XPATH, '/html/body/div[2]/div/div/div[1]/div/div/div/div[1]/section/main/div/div/div[1]/div[2]/form/div[4]/div/label/input')))
    elem1.send_keys('')
    try:
        wait.until(EC.presence_of_element_located((By.CLASS_NAME, "x1nxxyus")))
        register = "Registered"
    except:
        register = "Not Registered"
    return {
        "register": register
    }
