from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()
driver.get("http://localhost:3000")

assert "DevOps" in driver.page_source

button = driver.find_element(By.TAG_NAME, "button")
assert button is not None

driver.quit()
