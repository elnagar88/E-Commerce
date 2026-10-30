import { getUserAddress } from '@/app/services/address.services'
import { Building2, MapPin, Phone } from 'lucide-react'
import AddAddress from '../addAddress/AddAddress'
import { Card, CardContent } from '../card'
import DeleteAddress from '../deleteAddress/deleteAddress/DeleteAddress'

export default async function AddressComponent() {

  const { data } = await getUserAddress()

  return <>
    <div className="flex items-start justify-between">
      <div>
        <h1 className="text-2xl font-bold text-slate-900">My Addresses</h1>
        <p className="mt-1 text-sm text-slate-500">
          Manage your saved delivery addresses
        </p>
      </div>
      <AddAddress />

    </div>

    {data.length > 0 ? data.map((address) => {
      return <Card key={address._id} className="mt-6 rounded-2xl shadow-sm">
        <CardContent className="flex items-start justify-between p-6">
          <div className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900">{address.name}</h3>
              <p className="mt-1 text-sm text-slate-600">{address.details}</p>
              <div className="mt-3 flex items-center gap-5 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Phone className="h-4 w-4" />
                  {address.phone}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-4 w-4" />
                  {address.city}
                </span>
              </div>
            </div>
          </div>

        <DeleteAddress addressId={address._id}/>
        </CardContent>
      </Card>
    }) : <div className="flex flex-col items-center px-4 py-12 text-center my-20">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gray-100 ">
        <MapPin className="h-8 w-8  text-gray-400" />
      </div>

      <h3 className="mt-8 text-xl font-bold text-slate-900">No Addresses Yet</h3>

      <p className="mt-3 mb-5 max-w-sm text-base text-gray-500">
        Add your first delivery address to make checkout faster and easier.
      </p>
    </div>}
  </>
}
