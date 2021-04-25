import sqlalchemy
from sqlalchemy_serializer import SerializerMixin

from .db_session import SqlAlchemyBase
from sqlalchemy import orm


association_table = sqlalchemy.Table(
    'association',
    SqlAlchemyBase.metadata,
    sqlalchemy.Column('olymps', sqlalchemy.Integer,
                      sqlalchemy.ForeignKey('olymps.id')),
    sqlalchemy.Column('subjects', sqlalchemy.Integer,
                      sqlalchemy.ForeignKey('subjects.id'))
)

# Модель таблицы subjects (предметы)

class Subject(SqlAlchemyBase, SerializerMixin):
    __tablename__ = 'subjects'
    id = sqlalchemy.Column(sqlalchemy.Integer,
                           primary_key=True, autoincrement=True)  # столбец id
    name = sqlalchemy.Column(sqlalchemy.String, nullable=True)  # столбец названия предмета
