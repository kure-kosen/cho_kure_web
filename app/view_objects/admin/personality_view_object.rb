class Admin::PersonalityViewObject < Admin::BaseViewObject
  class << self
    def link_to_new(current_personality)
      return unless Pundit.policy(current_personality, [:admin, :personality]).new?
      link_to "パーソナリティ仮登録", new_admin_personality_path, class: "btn btn-primary"
    end

    def link_to_show(current_personality, personality)
      return unless Pundit.policy(current_personality, [:admin, personality]).show?
      link_to "詳細", admin_personality_path(personality), class: "btn btn-light btn-sm"
    end

    def link_to_edit(current_personality, personality)
      return unless Pundit.policy(current_personality, [:admin, personality]).edit?
      link_to "編集", edit_admin_personality_path(personality), class: "btn btn-light btn-sm"
    end

    def link_to_destroy(current_personality, personality)
      return unless Pundit.policy(current_personality, [:admin, personality]).destroy?
      link_to "削除",
              admin_personality_path(personality),
              method: :delete,
              data: { confirm: "本当に削除してもいいですか？" },
              class: "btn btn-danger btn-sm"
    end
  end
end
