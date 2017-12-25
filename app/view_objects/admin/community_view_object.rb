class Admin::CommunityViewObject < Admin::BaseViewObject
  class << self
    def link_to_new(current_personality)
      return unless Pundit.policy(current_personality, [:admin, :community]).new?
      link_to '新規コミュニティ作成', new_admin_community_path, class: "btn btn-primary"
    end

    def link_to_show(current_personality, community)
      return unless Pundit.policy(current_personality, [:admin, community]).show?
      link_to '詳細', admin_community_path(community), class: "btn btn-light btn-sm"
    end

    def link_to_edit(current_personality, community)
      return unless Pundit.policy(current_personality, [:admin, community]).edit?
      link_to '編集', edit_admin_community_path(community), class: "btn btn-light btn-sm"
    end

    def link_to_destroy(current_personality, community)
      return unless Pundit.policy(current_personality, [:admin, community]).destroy?
      link_to '削除',
              admin_community_path(community),
              method: :delete,
              data: { confirm: '本当に削除してもいいですか？' },
              class: "btn btn-danger btn-sm"
    end
  end
end
