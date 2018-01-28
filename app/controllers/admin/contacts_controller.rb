class Admin::ContactsController < Admin::BaseController
  before_action :set_contact, only: [:show, :edit, :update, :destroy]
  before_action :check_authorize

  # GET /contacts
  def index
    @contacts = Contact.all
  end

  # GET /contacts/1
  def show
  end

  # GET /contacts/new
  def new
    @contact = Contact.new
  end

  # GET /contacts/1/edit
  def edit
  end

  # POST /contacts
  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      redirect_to admin_contacts_url(@contact), notice: "投稿を作成しました。"
    else
      render :new
    end
  end

  # PATCH/PUT /contacts/1
  def update
    if @contact.update(contact_params)
      redirect_to admin_contact_path(@contact), notice: "投稿を更新しました。"
    else
      render :edit
    end
  end

  # DELETE /contacts/1
  def destroy
    @contact.destroy!
    redirect_to admin_contacts_url, notice: "投稿を削除しました。"
  end

  private

    # Use callbacks to share common setup or constraints between actions.
    def set_contact
      @contact = Contact.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def contact_params
      params.require(:contact).permit(:corner, :message, :nickname, :name, :department, :grade)
    end

    def check_authorize
      return authorize [:admin, @contact] if @contact.present?
      authorize [:admin, :contact]
    end
end
