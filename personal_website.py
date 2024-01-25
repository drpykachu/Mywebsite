from flask import Flask, render_template

app = Flask(__name__, static_url_path='/static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/Biography')
def Biography():
     return render_template('Biography.html')

@app.route('/Resume')
def Resume():
     return render_template('Resume.html')

@app.route('/Resume-Print')
def Resume():
     return render_template('Resume-Print.html')

@app.route('/Publications')
def Publications():
     return render_template('Publications.html')

@app.route('/Projects')
def Projects():
     return render_template('Projects.html')


if __name__ == '__main__':
    app.run(debug=False,port = 8000,host = '0.0.0.0')
