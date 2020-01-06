#!/usr/bin/env bash
HOST="localhost"
DB="egg_study"
USER="root"
PASS="root"
PORT="7001"
DIR="./app/model"
JSON_DEFINED="./app/database/config.json"
EXEC="sequelize-auto -o ${DIR} -d ${DB} -h ${HOST} -u ${USER} -p ${PORT} -x ${PASS} -e mysql -a ${JSON_DEFINED}"

#执行
$EXEC
