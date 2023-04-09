import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
# options.add_argument("--start-maximized")
# options.add_argument("--headless")
# options.add_argument("--window-size=0,0")


def get_details_whatsapp(mobile):
    options = webdriver.ChromeOptions()
    options.add_experimental_option('excludeSwitches', ['enable-logging'])
    path = '/chromedriver'
    driver = webdriver.Chrome(path, options=options)
    driver.get('https://web.whatsapp.com/')
    time.sleep(15)
    chat_name = 'Myself'
    time.sleep(8)
    chat = driver.find_element(By.XPATH, f"//span[@title='{chat_name}']")
    time.sleep(2)
    print(chat)
    print(chat.text)
    chat.click()
    time.sleep(2)
    msg_box = driver.find_element(
        By.XPATH, '/html/body/div[1]/div/div/div[5]/div/footer/div[1]/div/span[2]/div/div[2]/div[1]')
    time.sleep(3)
    msg_box.send_keys(f'https://wa.me/{mobile}')
    time.sleep(3)
    send_btn = driver.find_element(By.XPATH, '//span[@data-icon="send"]')
    time.sleep(3)
    send_btn.click()
    time.sleep(3)
    check_link = driver.find_element(
        By.XPATH, f'//a[@href="https://wa.me/{mobile}"]')
    time.sleep(3)
    check_link.click()
    time.sleep(10)
    try:
        last_seen = driver.find_element(
            By.XPATH, '//div[@data-testid="chat-subtitle"]')
        time.sleep(3)
        last_seen_text = last_seen.text
    except:
        last_seen_text = "No Last Seen"
    try:
        profile = driver.find_element(
            By.XPATH, '//div[@title="Profile Details"]')
        time.sleep(3)
        profile.click()
        time.sleep(3)
        about = driver.find_element(
            By.XPATH, '/html/body/div[1]/div/div/div[6]/span/div/span/div/div/section/div[2]/span/span')
        time.sleep(3)
        about = about.text
        time.sleep(3)

    except:
        about = "No About"
    try:
        name = driver.find_element(
            By.XPATH, '/html/body/div[1]/div/div/div[6]/span/div/span/div/div/section/div[1]/div[2]/h2/span')
        time.sleep(3)
        if name.text[0] == '+':
            phone = name.text
        else:
            name = name.text
        time.sleep(3)
        unknown_name = driver.find_element(
            By.XPATH, '/html/body/div[1]/div/div/div[6]/span/div/span/div/div/section/div[1]/div[2]/div/span/span')
        time.sleep(3)
        if unknown_name.text[0] == '~':
            name = unknown_name.text
        else:
            phone = unknown_name.text
        time.sleep(3)
    except:
        name = "No Name"
        phone = "No Phone"
    finally:
        try:
            img = driver.find_element(
                By.XPATH, '/html/body/div[1]/div/div/div[6]/span/div/span/div/div/section/div[1]/div[1]/div/img')
            time.sleep(3)
            img.click()
            time.sleep(3)
            img_src = driver.find_element(
                By.XPATH, '//img[@crossorigin="anonymous"]')
            time.sleep(3)
            image = img_src.get_attribute('src')
        except:
            image = "No Image"
        time.sleep(3)
    driver.close()
    return {
        'name': name,
        'phone': phone,
        'image': image,
        'about': about,
        'last_seen': last_seen_text
    }
