export const expectResponces = {
  api: {
    v1: {
      contacts: {
        enum: {
          corners: {
            普通のお便り: 0,
            "ラジオへの感想・意見": 10,
            ラジオ出演: 20,
            バグ報告: 30
          },
          departments: {
            機械工学科: 10,
            電気情報工学科: 20,
            環境都市工学科: 30,
            建築学科: 40,
            専攻科: 50,
            卒業生: 60,
            保護者: 70,
            教員: 80,
            その他: 90
          },
          grades: {
            "1年": 10,
            "2年": 20,
            "3年": 30,
            "4年": 40,
            "5年": 50,
            obog: 60,
            その他: 70
          }
        }
      }
    }
  }
};