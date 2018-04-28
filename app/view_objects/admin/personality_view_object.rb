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

    def link_to_change_role_to_guest(current_personality, personality)
      return unless Pundit.policy(current_personality, [:admin, personality]).change_role_to_guest?
      return if personality.role == PersonalityRoles::GUEST
      link_to "ゲストに変更",
              change_role_to_guest_admin_personality_path(personality),
              method: :patch,
              data: { confirm: "#{personality.name}をゲストに変更します。よろしいですか？" },
              class: "btn btn-info btn-sm"
    end

    def link_to_change_role_to_editor(current_personality, personality)
      return unless Pundit.policy(current_personality, [:admin, personality]).change_role_to_editor?
      return if personality.role == PersonalityRoles::EDITOR
      link_to "編集者に変更",
              change_role_to_editor_admin_personality_path(personality),
              method: :patch,
              data: { confirm: "#{personality.name}を編集者に変更します。よろしいですか？" },
              class: "btn btn-info btn-sm"
    end

    def link_to_change_role_to_reviewer(current_personality, personality)
      return unless Pundit.policy(current_personality, [:admin, personality]).change_role_to_reviewer?
      return if personality.role == PersonalityRoles::REVIEWER
      link_to "レビュアーに変更",
              change_role_to_reviewer_admin_personality_path(personality),
              method: :patch,
              data: { confirm: "#{personality.name}をレビュアーに変更します。よろしいですか？" },
              class: "btn btn-info btn-sm"
    end

    def link_to_change_role_to_secret(current_personality, personality)
      return unless Pundit.policy(current_personality, [:admin, personality]).change_role_to_secret?
      return if personality.role == PersonalityRoles::SECRET
      link_to "シークレットに変更",
              change_role_to_secret_admin_personality_path(personality),
              method: :patch,
              data: { confirm: "#{personality.name}をシークレットに変更します。よろしいですか？" },
              class: "btn btn-info btn-sm"
    end

    def link_to_change_role_to_admin(current_personality, personality)
      return unless Pundit.policy(current_personality, [:admin, personality]).change_role_to_guest?
      return if personality.role == PersonalityRoles::ADMIN
      link_to "管理者に変更",
              change_role_to_admin_admin_personality_path(personality),
              method: :patch,
              data: { confirm: "#{personality.name}を管理者に変更します。よろしいですか？" },
              class: "btn btn-info btn-sm"
    end
  end
end
