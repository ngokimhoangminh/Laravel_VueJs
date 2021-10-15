<?php
namespace App\Validates;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ShippingValidate extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
                'shipping_name' => 'required',
                'shipping_email' =>'required|', 
                'shipping_address' =>'required|', 
                'shipping_phone' =>'required|', 
                'shipping_country' =>'required|', 
                'shipping_note' =>'required|', 
            ];
    }
    public function messages(){
        return [
            'shipping_name.required' => 'Bạn chưa nhập tên người nhận',
            'shipping_email.unique' => 'Bạn chưa nhập Email',
            'shipping_address.required' => 'Địa chỉ hiện chưa có',
            'shipping_phone.required' => 'Số điện thoại hiện chưa có',
            'shipping_country.required' => 'Bạn chưa chọn quóc gia'
        ];
    }
}

?>