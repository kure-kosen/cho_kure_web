class Admin::EventViewObject < Admin::BaseViewObject
  class << self
    def link_to_new(current_personality)
      return unless Pundit.policy(current_personality, [:admin, :event]).new?
      link_to "新規イベント作成", new_admin_event_path, class: "btn btn-primary"
    end

    def link_to_show(current_personality, event)
      return unless Pundit.policy(current_personality, [:admin, event]).show?
      link_to "詳細", admin_event_path(event), class: "btn btn-light btn-sm"
    end

    def link_to_edit(current_personality, event)
      return unless Pundit.policy(current_personality, [:admin, event]).edit?
      link_to "編集", edit_admin_event_path(event), class: "btn btn-light btn-sm"
    end

    def link_to_destroy(current_personality, event)
      return unless Pundit.policy(current_personality, [:admin, event]).destroy?
      link_to "削除",
              admin_event_path(event),
              method: :delete,
              data: { confirm: "本当に削除してもいいですか？" },
              class: "btn btn-danger btn-sm"
    end
  end
end
