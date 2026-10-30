
import AddressComponent from "@/components/ui/addressComponent/AddressComponent";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroSection from "@/components/ui/heroSection/HeroSection";
import ProfileSettings from "@/components/ui/profileSetting/ProfileSettings";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import UpdatePassword from "@/components/ui/updatePassword/UpdatePassword";
import {
  ChevronRight,
  MapPin,
  Settings,
  UserPen
} from "lucide-react";


export default function page() {
  return <>
    <HeroSection path='Settings' subtitle='Manage your addresses and account settings' title='Settings' Icon={UserPen} />
    <div className="bg-slate-50 p-3 sm:p-5 min-h-[calc(100vh-80px)]">
      <Tabs
        defaultValue="addresses"
        className="mx-auto flex max-w-7xl flex-col gap-4 lg:flex-row lg:gap-8"
      >
        {/* Sidebar */}
        <aside className="w-full min-w-0 shrink-0 lg:w-72 lg:self-start">
          <Card className="rounded-2xl shadow-sm">
            <CardHeader className="hidden px-5 py-1 lg:block">
              <CardTitle className="border-b pb-2 text-base font-bold">
                My Account
              </CardTitle>
            </CardHeader>

            <CardContent className="p-2">
              <TabsList className="flex h-auto w-full justify-start gap-2 overflow-x-auto bg-transparent p-0 scrollbar-none [&::-webkit-scrollbar]:hidden lg:flex-col lg:gap-1 lg:overflow-visible">
                <TabsTrigger
                  value="addresses"
                  className="group flex h-auto shrink-0 grow-0 items-center justify-between whitespace-nowrap rounded-xl border-0 p-2 text-left text-gray-600 shadow-none hover:bg-slate-50 data-active:bg-green-50! data-active:shadow-none lg:w-full"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 group-data-active:bg-green-500 group-data-active:text-white sm:h-9 sm:w-9">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-gray-600 group-data-active:font-medium group-data-active:text-green-700 sm:text-base">
                      My Addresses
                    </span>
                  </div>
                  <ChevronRight className="hidden h-4 w-4 text-gray-400 group-data-active:text-green-600 lg:block" />
                </TabsTrigger>

                <TabsTrigger
                  value="profileSettings"
                  className="group flex h-auto shrink-0 grow-0 items-center justify-between whitespace-nowrap rounded-xl border-0 p-2 text-left text-gray-600 shadow-none hover:bg-slate-50 data-active:bg-green-50! data-active:shadow-none lg:w-full"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 group-data-active:bg-green-500 group-data-active:text-white sm:h-9 sm:w-9">
                      <UserPen className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-gray-600 group-data-active:font-medium group-data-active:text-green-700 sm:text-base">
                      Profile Settings
                    </span>
                  </div>
                  <ChevronRight className="hidden h-4 w-4 text-gray-400 group-data-active:text-green-600 lg:block" />
                </TabsTrigger>

                <TabsTrigger
                  value="changePassword"
                  className="group flex h-auto shrink-0 grow-0 items-center justify-between whitespace-nowrap rounded-xl border-0 p-2 text-left text-gray-600 shadow-none hover:bg-slate-50 data-active:bg-green-50! data-active:shadow-none lg:w-full"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-500 group-data-active:bg-green-500 group-data-active:text-white sm:h-9 sm:w-9">
                      <Settings className="h-4 w-4" />
                    </div>
                    <span className="text-sm text-gray-600 group-data-active:font-medium group-data-active:text-green-700 sm:text-base">
                      Change Password
                    </span>
                  </div>
                  <ChevronRight className="hidden h-4 w-4 text-gray-400 group-data-active:text-green-600 lg:block" />
                </TabsTrigger>
              </TabsList>
            </CardContent>
          </Card>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          <TabsContent value="addresses" className="mt-0">
            <AddressComponent />
          </TabsContent>

          <TabsContent value="profileSettings" className="mt-0">
            <ProfileSettings />
          </TabsContent>

          <TabsContent value="changePassword" className="mt-0">
            <UpdatePassword />
          </TabsContent>
        </main>
      </Tabs>
    </div>

  </>
}
