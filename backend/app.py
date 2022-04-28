# install flask => pip install Flask
# install flask-sqlalchemy => pip install Flask-SQLAlchemy
# if we are using MySQL DB => install mysqliclient => pip install mysqliclient
# install flask marshmallow => pip install flask-marshmallow
# since we are sqlalchemy => install marshmallow-sqlalchemy => pip install marshmallow-sqlalchemy

# ====================================================================================
from flask import Flask, jsonify, request
#creating the tables using sqlalchemy
from flask_sqlalchemy import SQLAlchemy
import datetime
#serialize and deserialize data
from flask_marshmallow import Marshmallow


#create object of the flask
app = Flask(__name__)

# DB was created called flask

userpass = 'mysql://root:''@'
basedir = '127.0.0.1'
dbname = '/flask'
socket = '?unix_socket=/opt/lampp/var/mysql/mysql.sock'
dbname = dbname + socket

app.config['SQLALCHEMY_DATABASE_URI'] = userpass + basedir + dbname
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

#DB connection

db = SQLAlchemy(app)
#crate a object of marshmallow
ma = Marshmallow(app)

#creating the table
class Articles(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text())
    date = db.Column(db.DateTime, default = datetime.datetime.now)

    def __init__(self, title, body):
        self.title = title
        self.body = body

# to add this table into db => open python terminal
# from app import db
# db.create_all()

#to open xampp server => sudo ./manager-linux-x64.run 

#incase apache server is not starting
# sudo /etc/init.d/apache2 stop   
# sudo /opt/lampp/lampp start


#create artcile schema
class ArticleSchema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'body', 'date') # fields to serialize


#schema object
article_schema = ArticleSchema() #for serializinfg one article
articles_schema = ArticleSchema(many=True) # for serializing many articles

#GET method
@app.route('/', methods = ['GET'])
def get_articles():
    all_articles = Articles.query.all()
    results = articles_schema.dump(all_articles)
    return jsonify(results)

#add articles => POST method
@app.route('/add', methods = ['POST'])
def add_articles():
    title = request.json['title']
    body = request.json['body']

    #object of class table
    articles = Articles(title, body)
    #add to the db
    db.session.add(articles)
    #commit to the db
    db.session.commit()
    return article_schema.jsonify(articles)


#GET by id
@app.route('/get/<id>/', methods = ['GET'])
def post_details(id):
    article = Articles.query.get(id)
    # return article_schema.jsonify(article)
    return article_schema.dump(article)

#PUT Method
@app.route('/update/<id>', methods = ['PUT'])
def update_articles(id):
    article = Articles.query.get(id)

    title = request.json['title']
    body = request.json['body']

    article.title = title
    article.body = body

    db.session.commit()
    return article_schema.jsonify(article)

#DELETE Method
@app.route('/delete/<id>', methods = ['DELETE'])
def article_delete(id):
    article = Articles.query.get(id)
    db.session.delete(article)
    db.session.commit()

    return article_schema.jsonify(article)


    


#run the flask file
if __name__ == "__main__":
    # app.run(debug=True)
    app.run(host='0.0.0.0', port=3000, debug=True)



