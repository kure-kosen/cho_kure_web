class Admin::ContactViewObject < Admin::BaseViewObject
  class << self
    def link_to_new(current_personality)
      return unless Pundit.policy(current_personality, [:admin, :contact]).new?
      link_to "新規投稿作成", new_admin_contact_path, class: "btn btn-primary"
    end

    def link_to_show(current_personality, contact)
      return unless Pundit.policy(current_personality, [:admin, contact]).show?
      link_to "詳細", admin_contact_path(contact), class: "btn btn-light btn-sm"
    end

    def link_to_edit(current_personality, contact)
      return unless Pundit.policy(current_personality, [:admin, contact]).edit?
      link_to "編集", edit_admin_contact_path(contact), class: "btn btn-light btn-sm"
    end

    def link_to_destroy(current_personality, contact)
      return unless Pundit.policy(current_personality, [:admin, contact]).destroy?
      link_to "削除",
              admin_contact_path(contact),
              method: :delete,
              data: { confirm: "本当に削除してもいいですか？" },
              class: "btn btn-danger btn-sm"
    end
  end
end
