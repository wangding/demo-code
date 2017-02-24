#! /user/bin/env python
# _*_  coding: utf-8  _*_
# __author__ = "王顶"
# Email: 408542507@qq.com

"""
输入华氏温度，计算输出摄氏温度
"""

temp = int(input('Fahrenheit temperature: '))
print('Celsius equivalent:', (temp - 32) * 5 / 9)