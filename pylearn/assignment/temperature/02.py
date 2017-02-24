#! /user/bin/env python
# _*_  coding: utf-8  _*_
# __author__ = "王顶"
# Email: 408542507@qq.com

"""
在控制台中输出摄氏温度和华氏温度对照表，第一列是摄氏度，
第二列是华氏度，摄氏度从-100到300度，间隔20度。
"""

print("Celsius  Fahrenheit\n-----------------")

temp = -100
while temp <=300 :
    print(temp, "   ", (temp * 9) / 5 + 32)
    temp = temp + 20
