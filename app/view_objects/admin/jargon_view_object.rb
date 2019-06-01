class Admin::JargonViewObject < Admin::BaseViewObject
  class << self
    def link_to_new(current_jargon)
      return unless Pundit.policy(current_jargon, [:admin, :jargon]).new?
      link_to "新規専門用語作成", new_admin_jargon_path, class: "btn btn-primary"
    end

    def link_to_show(current_jargon, jargon)
      return unless Pundit.policy(current_jargon, [:admin, jargon]).show?
      link_to "詳細", admin_jargon_path(jargon), class: "btn btn-light btn-sm"
    end

    def link_to_edit(current_jargon, jargon)
      return unless Pundit.policy(current_jargon, [:admin, jargon]).edit?
      link_to "編集", edit_admin_jargon_path(jargon), class: "btn btn-light btn-sm"
    end

    def link_to_destroy(current_jargon, jargon)
      return unless Pundit.policy(current_jargon, [:admin, jargon]).destroy?
      link_to "削除",
              admin_jargon_path(jargon),
              method: :delete,
              data: { confirm: "本当に削除してもいいですか？" },
              class: "btn btn-danger btn-sm"
    end
  end
end
