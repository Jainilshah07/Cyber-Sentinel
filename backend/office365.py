import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC


def get_details_office365(email):
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    service = Service('/chromedriver')
    driver = webdriver.Chrome(service=service, options=options)
    driver.get("https://login.microsoftonline.com/common/oauth2/v2.0/authorize?client_id=4765445b-32c6-49b0-83e6-1d93765276ca&redirect_uri=https%3A%2F%2Fwww.office.com%2Flandingv2&response_type=code%20id_token&scope=openid%20profile%20https%3A%2F%2Fwww.office.com%2Fv2%2FOfficeHome.All&response_mode=form_post&nonce=638166078884640791.OGFkZDA0MjktYzI1My00NDdkLTgxODctMjI3NzRiZTZjMGRhYjliZGNjNTgtZmYwZS00MjJiLTk1YTAtZjU4NTEyMDM0ODdk&ui_locales=en-US&mkt=en-US&client-request-id=67cc59e4-ecc1-46ed-8471-68d8e6fd27a0&state=YYUH7bxZ8k5CC5WCgdIVFbJnMmhcAZwMxxd-EOfojgfuXGo0jd8DE16R-Wt5UrRd8GV8hhh2vHkIQFTYhua-9sK2sZGXYwqx6i5bezK8CnCxTIKDslwj0nV9aRrdxW6IfeEg4ON8FUum3TgIfz7a0yUmhmCSTbvhPIwvKpC-EyHqIvmpsDhrHxmT10WY8THOO129l-mTNswZlvvv2XA7jSugMQFKmwc2DoiwqPioKecVLNTcrFDoc60wuWvSSX93KKvr3i57cxu_H_Sf6h7PFJJ0i6nMD-Y7RyW0NZw7n5Y&x-client-SKU=ID_NET6_0&x-client-ver=6.26.1.0")
    time.sleep(2)
    elem = driver.find_element(By.XPATH, "//input[@id='i0116']")
    time.sleep(2)
    elem.send_keys(email)
    time.sleep(2)
    elem_click = driver.find_element(By.ID, "idSIButton9")
    time.sleep(2)
    elem_click.click()
    time.sleep(3)
    elem2 = driver.find_element(By.XPATH, "//div[@role='heading']")
    time.sleep(3)
    if elem2.text == "Enter password":
        register = "Registered"
    else:
        elem1 = driver.find_element(By.ID, "usernameError")
        time.sleep(2)
        try:
            if elem1.text == "We couldn't find an account with that username. Try another, or get a new Microsoft account.":
                register = "Not Registered"
            else:
                register = "Registered"
        except Exception as e:
            register = "Registered"
    driver.close()
    return {
        "register": register
    }
