class Admin::RadioViewObject < Admin::BaseViewObject
  class << self
    def link_to_new(current_personality)
      return unless Pundit.policy(current_personality, [:admin, :radio]).new?
      link_to '新規ラジオ作成', new_admin_radio_path, class: "btn btn-primary"
    end

    def link_to_show(current_personality, radio)
      return unless Pundit.policy(current_personality, [:admin, radio]).show?
      link_to '詳細', admin_radio_path(radio), class: "btn btn-light btn-sm"
    end

    def link_to_edit(current_personality, radio)
      return unless Pundit.policy(current_personality, [:admin, radio]).edit?
      link_to '編集', edit_admin_radio_path(radio), class: "btn btn-light btn-sm"
    end

    def link_to_destroy(current_personality, radio)
      return unless Pundit.policy(current_personality, [:admin, radio]).destroy?
      link_to '削除',
              admin_radio_path(radio),
              method: :delete,
              data: { confirm: '本当に削除してもいいですか？' },
              class: "btn btn-danger btn-sm"
    end
  end
end
