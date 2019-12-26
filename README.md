# README

[![CircleCI](https://circleci.com/gh/kure-kosen/cho_kure_web/tree/feature%2Fdev.svg?style=svg)](https://circleci.com/gh/kure-kosen/cho_kure_web/tree/feature%2Fdev)
[![Maintainability](https://api.codeclimate.com/v1/badges/cef3c1298621fa26dd1c/maintainability)](https://codeclimate.com/github/kure-kosen/cho_kure_web/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cef3c1298621fa26dd1c/test_coverage)](https://codeclimate.com/github/kure-kosen/cho_kure_web/test_coverage)
[![Netlify Status](https://api.netlify.com/api/v1/badges/52294771-4cc8-449a-9d67-3016d98b03b0/deploy-status)](https://app.netlify.com/sites/cho-kure-web-storybook/deploys)

## Ruby version

```bash
$ ruby -v
ruby 2.4.2p198 (2017-09-14 revision 59899) [x86_64-darwin16]
```

## Setup without Docker

以下を実行すればセットアップは完了するはず。
mysql に接続できなければ `.env` を編集して自分の環境に合わせてください。

```bash
... installed ruby, mysql
$ git clone git@github.com:kure-kosen/cho_kure_web.git
$ cd cho_kure_web
$ bin/setup
```

## Setup with Docker

### Common

```bash
$ git clone git@github.com:kure-kosen/cho_kure_web.git
$ cd cho_kure_web
```

### Backend

```bash
... installed docker-compose
$ docker-compose build
$ docker-compose up
$ docker-compose run backend bin/rails db:create db:schema:load db:seed_fu
```

### Frontend

refer to [/frontend/README.md](/frontend/README.md)

## CircleCI

[CircleCI Local CLI](https://circleci.com/docs/2.0/local-cli/#quick-installation)

```bash
... installed CircleCI Local CLI
$ circleci local execute --job build
$ circleci local execute --job frontend-build
$ circleci local execute --job frontend-test
```

## SSL

```bash
... in production server
$ certbot-auto certificates
$ certbot-auto renew
# $ certbot-auto renew --dry-run
# $ certbot-auto renew --force-renew
$ service nginx restart
```

## Deploy

## SSH

```bash
$ cat ~/.ssh/config
Host cho_kure_web
  HostName 52.199.95.54
  Port 22
  User euglena1215
  IdentityFile ~/.ssh/id_rsa

# 2019/12/10, staging server is down.
# Host stg_cho_kure_web
#   HostName 13.115.40.132
#   Port 22
#   User taira
#   IdentityFile ~/.ssh/id_rsa
```

1. サーバーの ~/.ssh/authorized_keys に IdentityFile 追記する
1. deploy したいブランチを GitHub に push する
1. branch 名を変更
   - production: `set :branch, "master"` in (/config/deploy/production.rb)
   - staging: `set :branch, "feature/{xxxx}"` in (/config/deploy/staging.rb)
1. `$ bundle exec cap (staging | production) deploy`
1. `$ ssh (stg_cho_kure_web | cho_kure_web)` でサーバに入る
1. `$ bash ~/deploy_setup.sh` をサーバー内で実行

## その他

- 開発中にアプリケーションが送信したメールは `/letter_opener` で確認できます。
- `bundle exec rubocop` でコードの静的チェックが走ります。指摘箇所を修正して PR を出してください。
