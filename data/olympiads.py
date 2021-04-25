import sqlalchemy
from sqlalchemy_serializer import SerializerMixin
from .db_session import SqlAlchemyBase
from sqlalchemy import orm


# таблица olymps в базе данных
class Olymp(SqlAlchemyBase, SerializerMixin):
    __tablename__ = 'olymps'

    id = sqlalchemy.Column(sqlalchemy.Integer,
                           primary_key=True, autoincrement=True)
    name = sqlalchemy.Column(sqlalchemy.String, nullable=True)  # название олимпиады
    subject_id = sqlalchemy.Column(sqlalchemy.Integer,
                                   sqlalchemy.ForeignKey("subjects.id"))  # id предмета олимпиады
    number = sqlalchemy.Column(sqlalchemy.Integer, nullable=True)  # номер олимпиады в перечне
    profil = sqlalchemy.Column(sqlalchemy.String, nullable=True)  # профиль олимпиды
    level = sqlalchemy.Column(sqlalchemy.Integer, nullable=True)  # уровень олимпиады в перечне
    subjects = orm.relation("Subject",
                              secondary="association",
                              backref="subjects")
