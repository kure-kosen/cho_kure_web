class Api::V1::ContactsController < Api::V1::BaseController
  def index
    render json: Contact.order(created_at: :desc)
  end

  def enum
    render json: Api::ContactFormItem.new
  end

  def create
    @contact = Contact.new(contact_params)

    if @contact.save
      redirect_to admin_contacts_url(@contact), notice: "投稿を作成しました。"
    else
      render :new
    end
  end

  private

    # Never trust parameters from the scary internet, only allow the white list through.
    def contact_params
      params.require(:contact).permit(
        :corner,
        :message,
        :nickname,
        :name,
        :department,
        :grade,
        :readable,
      )
    end

    def create_enum_pairs(enum)
      @enum_pairs = []
      enum.form_items.zip(enum.values).each do |item, value|
        item_name = item[0]
        enum_pair = { "name": item_name, "value": value }
        @enum_pairs.push(enum_pair)
      end
      @enum_pairs
    end
end
