import { useState, useEffect } from 'react';
import { Heart, X, Settings } from 'lucide-react';

export default function HapticHug() {
  const [showHug, setShowHug] = useState(false);
  const [hugEnabled, setHugEnabled] = useState(true);
  const [showSettings, setShowSettings] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hugPreference = localStorage.getItem('hapticHugEnabled');
    if (hugPreference !== null) {
      setHugEnabled(hugPreference === 'true');
    }

    const hasSeenHug = sessionStorage.getItem('hasSeenHug');
    if (!hasSeenHug && hugPreference !== 'false') {
      setTimeout(() => {
        setShowHug(true);
        triggerHapticFeedback();
      }, 1000);
      sessionStorage.setItem('hasSeenHug', 'true');
    }
  }, []);

  const triggerHapticFeedback = () => {
    if ('vibrate' in navigator) {
      navigator.vibrate([100, 50, 100, 50, 200, 100, 100]);
    }
  };

  const handleSendHugBack = () => {
    setIsAnimating(true);
    triggerHapticFeedback();
    setTimeout(() => {
      setIsAnimating(false);
      setShowHug(false);
    }, 2000);
  };

  const handleToggleHug = () => {
    const newValue = !hugEnabled;
    setHugEnabled(newValue);
    localStorage.setItem('hapticHugEnabled', newValue.toString());
  };

  if (!showHug && !showSettings) return null;

  return (
    <>
      {showHug && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scale-in relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 opacity-50"></div>

            <div className="relative">
              <button
                onClick={() => setShowHug(false)}
                className="absolute top-0 right-0 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              <div className="flex justify-center mb-6">
                <div
                  className={`relative ${
                    isAnimating ? 'animate-hug-squeeze' : 'animate-hug-pulse'
                  }`}
                >
                  <Heart className="w-20 h-20 text-orange-500 fill-orange-500" />
                  <Heart className="w-20 h-20 text-orange-400 fill-orange-400 absolute top-0 left-0 animate-hug-beat" />
                </div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 text-center mb-4">
                Welcome Back!
              </h2>

              <p className="text-gray-700 text-center mb-6 leading-relaxed">
                Everyone at Returnees Hotline sends you a <span className="font-semibold">Haptic Hug</span>{' '}
                <span className="inline-block animate-bounce">🤗</span>
              </p>

              <div className="bg-gradient-to-br from-orange-100 to-amber-100 rounded-2xl p-4 mb-6">
                <p className="text-sm text-gray-700 text-center">
                  Feel the gentle vibration? That's our community wrapping you in warmth and support.
                </p>
              </div>

              <button
                onClick={handleSendHugBack}
                disabled={isAnimating}
                className={`w-full px-6 py-4 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold rounded-full hover:from-orange-500 hover:to-amber-600 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center ${
                  isAnimating ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                <Heart className="w-5 h-5 mr-2" />
                {isAnimating ? 'Sending Hug...' : 'Send a Hug Back 💛'}
              </button>

              <button
                onClick={() => setShowSettings(true)}
                className="w-full mt-3 px-6 py-3 text-gray-600 hover:text-gray-800 transition-colors flex items-center justify-center text-sm"
              >
                <Settings className="w-4 h-4 mr-2" />
                Hug Settings
              </button>
            </div>
          </div>
        </div>
      )}

      {showSettings && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Haptic Hug Settings</h2>
              <button
                onClick={() => setShowSettings(false)}
                className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex-grow pr-4">
                  <div className="font-semibold text-gray-900 mb-1">Receive Haptic Hugs</div>
                  <div className="text-sm text-gray-600">
                    Get a welcoming vibration when you visit
                  </div>
                </div>
                <button
                  onClick={handleToggleHug}
                  className={`relative w-14 h-8 rounded-full transition-colors ${
                    hugEnabled ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                >
                  <div
                    className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform ${
                      hugEnabled ? 'translate-x-6' : 'translate-x-0'
                    }`}
                  ></div>
                </button>
              </div>
            </div>

            <div className="bg-orange-50 rounded-2xl p-4 mb-6">
              <p className="text-sm text-gray-700">
                <strong>Note:</strong> Haptic feedback requires a device with vibration capabilities
                and may not work on all browsers or devices.
              </p>
            </div>

            <button
              onClick={() => {
                setShowSettings(false);
                setShowHug(false);
              }}
              className="w-full px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-full hover:from-sky-600 hover:to-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
}
