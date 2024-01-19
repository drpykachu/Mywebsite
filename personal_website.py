from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Biography')
def Biography():
     return render_template('Biography.html')


if __name__ == '__main__':
    app.run(debug=False,port = 8000,host = '0.0.0.0')
