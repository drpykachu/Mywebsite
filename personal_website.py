from flask import Flask, render_template
from flask_talisman import Talisman

app = Flask(__name__)
talisman = Talisman(app, content_security_policy=None)

@app.route('/')
def index():
    return render_template('index.html')

# @app.route('/publications/')
# def publications():
#      return render_template('publications_tab.html')

if __name__ == '__main__':
    # app.run(ssl_context=('/etc/letsencrypt/live/anthonyrpyka.servebeer.com/fullchain.pem', '/etc/letsencrypt/live/anthonyrpyka.servebeer.com/privkey.pem'), debug=True,port = 443,host = '0.0.0.0')
    app.run(debug=True,port = 443,host = '0.0.0.0')
# i think this is good 2
