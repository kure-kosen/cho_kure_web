# == Schema Information
#
# Table name: jargons
#
# id          :integer        not null, primary key
# name        :string(255)    not null
# description :text(65535)    not null
# radio_id    :integer        not null
# major       :integer        not null

class Jargon < ApplicationRecord
  validates :name,
            presence: true,
            uniqueness: true
  validates :description, presence: true
  validates :radio_id, presence: true
  validates :major, presence: true
  
  bind_inum :major, JargonMajors
end
