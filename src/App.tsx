import {
  Header,
  ItemList,
  ComplexForm,
  NotificationSystem,
} from "./components";
import {
  ThemeProvider,
  UserProvider,
  NotificationProvider,
  UserItemProvider,
} from "./contexts";

// 메인 App 컴포넌트
const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <NotificationProvider>
          <UserItemProvider>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 dark:text-white">
              <Header />
              <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row">
                  <div className="w-full md:w-1/2 md:pr-4">
                    <ItemList />
                  </div>
                  <div className="w-full md:w-1/2 md:pl-4">
                    <ComplexForm />
                  </div>
                </div>
              </div>
              <NotificationSystem />
            </div>
          </UserItemProvider>
        </NotificationProvider>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
