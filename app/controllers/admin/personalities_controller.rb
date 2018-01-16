class Admin::PersonalitiesController < Admin::BaseController
  before_action :set_personality, only: [
    :show, :edit, :update, :destroy,
    :change_role_to_guest,
    :change_role_to_editor,
    :change_role_to_secret,
    :change_role_to_admin
  ]
  before_action :set_tag_list, only: [:edit]
  before_action :check_authorize

  # GET /personalities
  # GET /personalities.json
  def index
    @personalities = policy_scope([:admin, Personality])
  end

  # GET /personalities/1
  # GET /personalities/1.json
  def show
  end

  def new
    @personality = Personality.new
  end

  def create
    @personality = Personality.new(provisional_personality_params)

    # 仮登録なのでちゃんと変更してもらう
    @personality.password = "password"
    @personality.password_confirmation = "password"

    if @personality.save
      redirect_to admin_personalities_url(@personality), notice: "Personality was successfully created."
    else
      render :new
    end
  end

  # GET /personalities/1/edit
  def edit
  end

  # PATCH/PUT /personalities/1
  # PATCH/PUT /personalities/1.json
  def update
    if @personality.update(personality_params)
      redirect_to admin_personality_path(@personality), notice: "Personality was successfully updated."
    else
      render :edit
    end
  end

  # DELETE /personalities/1
  # DELETE /personalities/1.json
  def destroy
    @personality.destroy!
    redirect_to admin_personalities_url, notice: "Personality was successfully destroyed."
  end

  def change_role_to_guest
    @personality.change_role_to_guest!
    redirect_to [:admin, @personality], notice: "権限を「ゲスト」に変更しました。"
  end

  def change_role_to_editor
    @personality.change_role_to_editor!
    redirect_to [:admin, @personality], notice: "権限を「編集者」に変更しました。"
  end

  def change_role_to_secret
    @personality.change_role_to_secret!
    redirect_to [:admin, @personality], notice: "権限を「シークレット」に変更しました。"
  end

  def change_role_to_admin
    @personality.change_role_to_admin!
    redirect_to [:admin, @personality], notice: "権限を「管理者」に変更しました。"
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_personality
      @personality = Personality.find(params[:id])
    end

    def set_tag_list
      @tag_list = Personality.tags_on(:tags).pluck(:name)
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def personality_params
      params.require(:personality).permit(:name, :nickname, :image, :description, :tag_list)
    end

    def provisional_personality_params
      params.require(:personality).permit(:name, :email)
    end

    def check_authorize
      return authorize [:admin, @personality] if @personality.present?
      authorize [:admin, :personality]
    end
end
