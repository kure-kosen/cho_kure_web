# README

[![CircleCI](https://circleci.com/gh/kure-kosen/cho_kure_web/tree/feature%2Fdev.svg?style=svg)](https://circleci.com/gh/kure-kosen/cho_kure_web/tree/feature%2Fdev)
[![Maintainability](https://api.codeclimate.com/v1/badges/cef3c1298621fa26dd1c/maintainability)](https://codeclimate.com/github/kure-kosen/cho_kure_web/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/cef3c1298621fa26dd1c/test_coverage)](https://codeclimate.com/github/kure-kosen/cho_kure_web/test_coverage)

## Ruby version

```bash
% ruby -v
ruby 2.4.2p198 (2017-09-14 revision 59899) [x86_64-darwin16]
```

## Setup

以下を実行すればセットアップは完了するはず。
mysqlに接続できなければ `.env` を編集して自分の環境に合わせてください。

```bash
% git clone git@github.com:kure-kosen/cho_kure_web.git
% cd cho_kure_web
% bin/setup
```

## Setup with Docker

### Common

```bash
% git clone git@github.com:kure-kosen/cho_kure_web.git
% cd cho_kure_web
```

### Backend

```bash
... installed docker-compose
% docker-compose build
% docker-compose up
% docker-compose run backend bin/rails db:create db:schema:load db:seed_fu
```

### Frontend

```bash
% cd ./frontend
% yarn install

# Commands
% yarn start  # Start webpack-dev-server
% yarn build  # Build to dist/
% yarn lint   # Check type and syntax, auto fix
```

## その他

* 開発中にアプリケーションが送信したメールは `/letter_opener` で確認できます。
* `bundle exec rubocop` でコードの静的チェックが走ります。指摘箇所を修正してPRを出してください。
