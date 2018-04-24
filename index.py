 #coding=utf-8
from flask import Flask 
from flask import jsonify
from flask import render_template
from flask import request
import math
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html',a = 'a',b ='b',c ='c',type = -1 )

# 处理表单提交数据
@app.route('/triangle-info',methods=['post','get'])
def triangle_judge():
    # 默认三角形类型为0，表示非三角形
    type = 0
    # print(request)
    # 获取三角形边长
    a = int(float(request.form['a']))

    b = int(float(request.form['b']))
    c = int(float(request.form['c']))
    triangle_list = [a,b,c]
    # 边长排序
    triangle_list.sort()
    # 判断类型
    if triangle_list[0] + triangle_list[1] <= triangle_list[2]:
        # 非三角形
        type = 0
    else:
        if pow(triangle_list[0],2) + pow(triangle_list[1],2) == pow(triangle_list[2],2):
            # 直角三角形
            type = 1
        elif pow(triangle_list[0],2) + pow(triangle_list[1],2) > pow(triangle_list[2],2):
            # 锐角三角形
            type = 2
        else:
            # 钝角三角形
            type = 3

        if triangle_list[0] == triangle_list[1] or triangle_list[1] == triangle_list[2]:
            # 等腰三角形
            if type != 1:
                type = 4
            # 等腰直角三角形
            else:
                type = 5
            
            if triangle_list[0] == triangle_list[2] :
                # 等边三角形
                type = 6
    
    return render_template('index.html',a = a,b = b,c = c,type = type)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)