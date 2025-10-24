import { Users, UserPlus, MessageCircle, Video } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router";

const FriendsPage = () => {
  // Fetch friends data
  const { data: friends, isLoading } = useQuery({
    queryKey: ["friends"],
    queryFn: async () => {
      const res = await fetch("/api/users/friends", {
        credentials: "include",
      });
      if (!res.ok) throw new Error("Failed to fetch friends");
      return res.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="p-6 border-b border-base-300">
        <div className="flex items-center gap-3">
          <Users className="size-8 text-primary" />
          <div>
            <h1 className="text-2xl font-bold">Friends</h1>
            <p className="text-sm text-base-content/60">
              {friends?.length || 0}{" "}
              {friends?.length === 1 ? "friend" : "friends"}
            </p>
          </div>
        </div>
      </div>

      {/* Friends List */}
      <div className="flex-1 overflow-y-auto p-6">
        {!friends || friends.length === 0 ? (
          <div className="text-center py-12">
            <UserPlus className="size-16 mx-auto text-base-content/30 mb-4" />
            <h3 className="text-lg font-semibold mb-2">No friends yet</h3>
            <p className="text-base-content/60 mb-4">
              Start connecting with people to see them here
            </p>
            <Link to="/" className="btn btn-primary">
              Find Friends
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {friends.map((friend) => (
              <div
                key={friend._id}
                className="card bg-base-200 hover:bg-base-300 transition-all duration-200 hover:shadow-lg"
              >
                <div className="card-body p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="avatar">
                      <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img
                          src={friend.profilePic}
                          alt={friend.fullName}
                        />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">
                        {friend.fullName}
                      </h3>
                      <div className="flex flex-col gap-1 mt-1">
                        {friend.nativeLanguage && (
                          <span className="badge badge-sm badge-primary">
                            Native: {friend.nativeLanguage}
                          </span>
                        )}
                        {friend.learningLanguage && (
                          <span className="badge badge-sm badge-secondary">
                            Learning: {friend.learningLanguage}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <button className="btn btn-primary btn-sm flex-1 gap-2">
                      <MessageCircle className="size-4" />
                      Chat
                    </button>
                    <button className="btn btn-secondary btn-sm flex-1 gap-2">
                      <Video className="size-4" />
                      Call
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FriendsPage;