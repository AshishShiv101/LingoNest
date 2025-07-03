import { Link } from "react-router";
import { LANGUAGE_TO_FLAG } from "../constants";

const FriendCard = ({ friend }) => {
    return (
        <div className="card bg-base-200 hover:shadow-md transition-shadow">
            <div className="card-body p-5 space-y-4">
                {/* USER INFO */}
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="w-16 h-16 rounded-full">
                            <img src={friend.profilePic} alt={`${friend.fullName}'s profile picture`} />
                        </div>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">{friend.fullName}</h3>
                    </div>
                </div>

                {/* Languages with flags */}
                <div className="flex flex-wrap gap-1.5">
                    <span className="badge badge-secondary">
                        {getLanguageFlag(friend.nativeLanguage)}
                        Native: {friend.nativeLanguage}
                    </span>
                    <span className="badge badge-outline">
                        {getLanguageFlag(friend.learningLanguage)}
                        Learning: {friend.learningLanguage}
                    </span>
                </div>

                <Link
                    to={`/chat/${friend._id}`}
                    className="btn btn-primary w-full mt-2"
                    aria-label={`Message ${friend.fullName}`}
                >
                    Message
                </Link>
            </div>
        </div>
    );
};

export default FriendCard;

export function getLanguageFlag(language) {
    if (!language) return null;

    const langLower = language.toLowerCase();
    const countryCode = LANGUAGE_TO_FLAG[langLower];

    if (countryCode) {
        return (
            <img
                src={`https://flagcdn.com/24x18/${countryCode}.png`}
                alt={`Flag of ${langLower}`}
                className="h-3 mr-1 inline-block"
            />
        );
    }
    return null;
}