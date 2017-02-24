#! /user/bin/env python
# _*_  coding: utf-8  _*_
# __author__ = "王顶"
# Email: 408542507@qq.com

"""
四则运算
"""


def show_nenu():
    cmd_menu = ("\n"
                "[1] Add\n"
                "[2] Subtract\n"
                "[3] Multiply\n"
                "[4] Divide\n")
    print(cmd_menu)
    return


def calc(num1, num2, opt):
    if opt == 1:
        return num1 + num2
    elif opt == 2:
        return num1 - num2
    elif opt == 3:
        return num1 * num2
    elif opt == 4:
        return num1 / num2
    else:
        return 0


show_nenu()
choice = int(input("Enter your choice:"))
f1 = int(input("First Number:"))
f2 = int(input("Second Number:"))
# opt = ['+', '-', '*', '/']
opt = ('+', '-', '*', '/')  # opt 改成了只读的元组这样更好一些
print("{0} {1} {2} = {3}".format(f1, opt[choice - 1], f2, calc(f1, f2, choice)))